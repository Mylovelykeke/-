import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Like } from './like.entity'
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Repository, getRepository } from 'typeorm';
import { ArticleService } from '../article/article.service';
@Injectable()
export class LikeService {
    constructor(
        @InjectRepository(Like)
        private readonly likeRepository: Repository<Like>,
        private readonly articleService: ArticleService
    ) { }

    /**
     * 获取所有
    */
    async findAll(queryParams): Promise<Like[]> {
        const { openid } = queryParams
        const data = await this.likeRepository
            .createQueryBuilder('like')
            .where('like.userId=:openid')
            .setParameter('openid', openid)
            .orderBy('like.createAt', 'DESC')
            .getMany()
        for (let d of data) {
            let id = d.articleId
            let article = await this.articleService.findById(id)
            Object.assign(d, { article })
        }
        return data
    }

    /**
     * 保存收藏
     * 
     */
    async save(like: Partial<Like>) {
        let { articleId, userId } = like
        let item = await this.likeRepository.findOne({
            articleId: articleId,
            userId: userId
        });
        if (item) {
            throw new HttpException('已经收藏过了', HttpStatus.BAD_REQUEST);
        }
        const newLike = await this.likeRepository.create(like);
        await this.likeRepository.save(newLike);
        return newLike
    }
    /**
     * 收藏数量
     * @param queryParams 
     */
    async findCount(queryParams): Promise<Number> {
        const { openid } = queryParams
        const data = await this.likeRepository
            .createQueryBuilder('like')
            .where('like.userId=:openid')
            .setParameter('openid', openid)
            .getCount()
        return data
    }

    /**
     * 删除收藏
     */
    async deleteById(id) {
        const like = await this.likeRepository.findOne(id);
        if (!like) {
            throw new HttpException('id不存在', HttpStatus.BAD_REQUEST);
        }
        return this.likeRepository.remove(like);
    }

}

