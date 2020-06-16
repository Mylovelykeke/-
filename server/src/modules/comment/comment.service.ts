import { Injectable, HttpException, HttpStatus, Inject, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SMTPService } from '../smtp/smtp.service';
import { ArticleService } from '../article/article.service';
import { SettingService } from '../setting/setting.service';
import { UserService } from '../user/user.service';
import { MsgService } from '../msg/msg.service';
import { marked } from '../article/markdown.util';
import { Comment } from './comment.entity';

const url = require('url');
const UAParser = require('ua-parser-js');
const dayjs = require('dayjs');

/**
 * 扁平接口评论转为树形评论
 * @param list
 */
function buildTree(list) {
  let temp = {};
  let tree = [];

  for (let item of list) {
    temp[item.id] = item;
  }

  for (let i in temp) {
    if (temp[i].parentCommentId) {
      if (temp[temp[i].parentCommentId]) {
        if (!temp[temp[i].parentCommentId].children) {
          temp[temp[i].parentCommentId].children = [];
        }
        temp[temp[i].parentCommentId].children.push(temp[i]);
      } else {
        tree.push(temp[i]); // 父级可能被删除或者未通过，直接升级
      }
    } else {
      tree.push(temp[i]);
    }
  }

  return tree;
}

const parseUserAgent = (userAgent) => {
  const uaparser = new UAParser();
  uaparser.setUA(userAgent);
  const uaInfo = uaparser.getResult();
  let msg = `${uaInfo.browser.name || ''} ${uaInfo.browser.version || ''} `;
  msg += ` ${uaInfo.os.name || ''}  ${uaInfo.os.version || ''} `;
  msg += `${uaInfo.device.vendor || ''} ${uaInfo.device.model || ''} ${uaInfo
    .device.type || ''}`;
  return msg;
};
@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
    private readonly userService: UserService,
    private readonly msgService: MsgService,
    private readonly articleService: ArticleService,
  ) { }

  /**
   * 创建评论
   * @param comment
   */
  async create(
    userAgent,
    comment: Partial<Comment> & { replyUserId?: string; createByAdmin?: boolean; openid?: string }
  ): Promise<Comment> {
    const { hostId, openid, content, parentCommentId, replyUserId, createByAdmin = false } = comment;
    if (!hostId || !content) {
      throw new HttpException('缺失参数', HttpStatus.BAD_REQUEST);
    }
    if (!parentCommentId) delete comment['parentCommentId']
    comment.pass = false;
    comment.userAgent = parseUserAgent(userAgent);
    let userInfo = await this.userService.findByopenId(openid)
    let replyUser = await this.userService.findById(replyUserId)

    const newComment = await this.commentRepository.create({
      ...comment,
      author: userInfo,
      replyUser: replyUser
    });
    await this.commentRepository.save(newComment);

    const articleData = await this.articleService.findById(newComment.hostId)
    let articleAuthor = articleData.openid
    articleAuthor = articleAuthor!=userInfo.openid?articleAuthor:null
    if(replyUser){
      articleAuthor = articleAuthor!=replyUser.openid?articleAuthor:null
    }
    let message_id = newComment.id;
    if (articleAuthor) await this.msgService.created({ 'message_id': message_id, 'user_id': articleAuthor });
    if (userInfo) await this.msgService.created({ 'message_id': message_id, 'user_id': userInfo.openid });
    if (replyUser) await this.msgService.created({ 'message_id': message_id, 'user_id': replyUser.openid });
    return newComment;
  }

  /**
   * 查询所有评论
   * 额外添加文章信息
   */
  async findAll(queryParams: any = {}): Promise<[Comment[], number]> {
    const query = this.commentRepository
      .createQueryBuilder('comment')
      .orderBy('comment.createAt', 'DESC');

    const { page = 1, pageSize = 12, pass, ...otherParams } = queryParams;

    query.skip((+page - 1) * +pageSize);
    query.take(+pageSize);

    if (pass) {
      query.andWhere('comment.pass=:pass').setParameter('pass', pass);
    }

    if (otherParams) {
      Object.keys(otherParams).forEach((key) => {
        query
          .andWhere(`comment.${key} LIKE :${key}`)
          .setParameter(`${key}`, `%${otherParams[key]}%`);
      });
    }

    return query.getManyAndCount();
  }

  /**
   * 获取指定评论
   * @param id
   */
  async findById(id): Promise<any> {
    const subQuery = this.commentRepository
      .createQueryBuilder('comment')
      .leftJoinAndSelect('comment.author', 'user')
      .leftJoinAndSelect('comment.replyUser', 'user1')
      .andWhere('comment.pass=:pass')
      .andWhere('comment.parentCommentId=:parentCommentId')
      .orderBy('comment.createAt', 'DESC')
      .setParameter('pass', false);
    const data = await this.commentRepository
      .createQueryBuilder('comment')
      .leftJoinAndSelect('comment.author', 'user')
      .where('comment.id=:id')
      .setParameter('id', id)
      .getOne();
    const subComments = await await subQuery
      .setParameter('parentCommentId', id)
      .getMany();
    Object.assign(data,{createAt: dayjs(data.createAt).format('YYYY-MM-DD HH:mm:ss')})
    for(let item of subComments){
      Object.assign(item,{createAt: dayjs(item.createAt).format('YYYY-MM-DD HH:mm:ss')})
    }
    return { 'parent': data, 'children': subComments }
  }

  /**
   * 获取文章评论
   * @param articleId
   */
  async getArticleComments(hostId, queryParams) {
    const query = this.commentRepository
      .createQueryBuilder('comment')
      .leftJoinAndSelect('comment.author', 'user')
      .leftJoinAndSelect('comment.replyUser', 'user1')
      .where('comment.hostId=:hostId')
      .andWhere('comment.pass=:pass')
      .andWhere('comment.parentCommentId is NULL')
      .orderBy('comment.createAt', 'ASC')
      .setParameter('hostId', hostId)
      .setParameter('pass', false)

    const subQuery = this.commentRepository
      .createQueryBuilder('comment')
      .leftJoinAndSelect('comment.author', 'user')
      .leftJoinAndSelect('comment.replyUser', 'user1')
      .andWhere('comment.pass=:pass')
      .andWhere('comment.parentCommentId=:parentCommentId')
      .orderBy('comment.createAt', 'ASC')
      .setParameter('pass', false);

    const { page = 1, pageSize = 12 } = queryParams;
    query.skip((+page - 1) * +pageSize);
    query.take(+pageSize);
    const [data, count] = await query.getManyAndCount();

    for (let item of data) {
      const subComments = await subQuery
        .setParameter('parentCommentId', item.id)
        .take(3)
        .getManyAndCount();
      for (let item of subComments[0]) {
        Object.assign(item, { createAt: dayjs(item.createAt).format('YYYY-MM-DD HH:mm:ss') });
      }
      Object.assign(item, { children: subComments, createAt: dayjs(item.createAt).format('YYYY-MM-DD HH:mm:ss') });
    }

    return [data, count];
  }

  /**
   * 
   * @param 获取文章评论个数
   */
  async getArticleCount(hostId) {
    let count =await this.commentRepository
      .createQueryBuilder('comment')
      .where('comment.hostId=:hostId')
      .setParameter('pass', false)
      .setParameter('hostId', hostId)
      .getCount()
    return count
  }

  /**
   *  获取用户评论 
   */
  async getUserCommonList(id) {
    let [data, total] = await this.msgService.getMessage(id)
    for (let item of data) {
      const subComments = await this.findById(item.message_id)
      Object.assign(item, { 
        createAt: dayjs(item.createAt).format('YYYY-MM-DD HH:mm:ss'),
        message: subComments.parent,total: total
      })
    }
    return data
  }


  async findByIds(ids): Promise<Array<Comment>> {
    return this.commentRepository.findByIds(ids);
  }

  /**
   * 更新评论
   * @param id
   * @param tag
   */
  async updateById(id, data: Partial<Comment>): Promise<Comment> {
    const old = await this.commentRepository.findOne(id);
    const newData = await this.commentRepository.merge(old, data);

    return this.commentRepository.save(newData);
  }

  async deleteById(id) {
    const data = await this.commentRepository.findOne(id);
    return this.commentRepository.remove(data);
  }
}
