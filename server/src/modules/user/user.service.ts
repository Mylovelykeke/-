import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { config , wxconfig } from '../../config';
import { User } from './user.entity';
import { JwtService } from '@nestjs/jwt';
const request = require('request');

function wxrequest(options) {
  return new Promise((resolve, reject) =>{
    request(options, (error, response, body) => {
        if(error) { //请求异常时，返回错误信息
          reject(error)
        }else { 
          resolve(JSON.parse(body))
        }
    })
  })
}
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService
  ) {
    const { nickName, password, openid } = config.admin;
    this.createUser({ nickName, password, openid, role: 'admin' })
      .then(_ => {
        console.log();
        console.log(
          `管理员账户创建成功，用户名：${nickName}，密码：${password}，请及时登录系统修改默认密码`
        );
        console.log();
      })
      .catch(_ => {
        console.log();
        console.log(
          `管理员账户已经存在，用户名：${nickName}，密码：${password}，请及时登录系统修改默认密码`
        );
        console.log();
      });
  }
  createToken(User: Partial<User>) {
    const accessToken = this.jwtService.sign(User);
    return accessToken;
  }
  
  async getLoginToken(code):Promise<any> {
    let options = {
      url: `https://api.weixin.qq.com/sns/jscode2session?appid=${wxconfig.appid}&secret=${wxconfig.secret}&js_code=${code}&grant_type=authorization_code`,
    };
    return await wxrequest(options)
  }

  async findAll(queryParams: any = {}): Promise<[User[], number]> {
    const query = this.userRepository
      .createQueryBuilder('user')
      .orderBy('user.createAt', 'DESC');

    const { page = 1, pageSize = 12, status, ...otherParams } = queryParams;

    query.skip((+page - 1) * +pageSize);
    query.take(+pageSize);

    if (status) {
      query.andWhere('user.status=:status').setParameter('status', status);
    }

    if (otherParams) {
      Object.keys(otherParams).forEach(key => {
        query
          .andWhere(`user.${key} LIKE :${key}`)
          .setParameter(`${key}`, `%${otherParams[key]}%`);
      });
    }

    return query.getManyAndCount();
  }

  /**
   * 创建用户
   * @param user
   */
  async createUser(user: Partial<User>): Promise<any> {
    const { nickName, openid } = user;
    const existUser = await this.userRepository.findOne({ where: { openid } });
    //如果存在直接返回token
    if (existUser) {
      // const token = this.createToken({
      //   id: existUser.id,
      //   nickName: existUser.nickName,
      //   email: existUser.email,
      //   role: existUser.role,
      // });
      let updatedUser = await this.userRepository.merge(existUser,user)
      await this.userRepository.save(updatedUser);
      const token = this.createToken({
        id: updatedUser.id,
        nickName: updatedUser.nickName,
        email: updatedUser.email,
        role: updatedUser.role,
      });
      return Object.assign(updatedUser, { token });
    }else{
      const newUser = await this.userRepository.create(user);
      await this.userRepository.save(newUser);
      const token = this.createToken({
        id: newUser.id,
        nickName: newUser.nickName,
        email: newUser.email,
        role: newUser.role,
      });
      return Object.assign(newUser, { token });
    }
  }

  /**
   * 用户登录
   * @param user
   */
  async login(user: Partial<User>): Promise<User> {
    const { nickName, password,openid} = user;
    const existUser = await this.userRepository.findOne({ where: { openid } });

    if (
      !existUser ||
      !(await User.comparePassword(password, existUser.password))
    ) {
      throw new HttpException(
        '用户名或密码错误',
        // tslint:disable-next-line: trailing-comma
        HttpStatus.BAD_REQUEST
      );
    }

    if (existUser.status === 'locked') {
      throw new HttpException(
        '用户已锁定，无法登录',
        // tslint:disable-next-line: trailing-comma
        HttpStatus.BAD_REQUEST
      );
    }

    return existUser;
  }

  /**
   * 获取指定用户
   * @param id
   */
  async findById(id): Promise<User> {
    return this.userRepository.findOne(id);
  }

   /**
   * 获取指定openid
   * @param openid
   */
  async findByopenId(openid): Promise<User> {
    return this.userRepository.findOne({ where: { openid } });
  }

  /**
   * 更新指定用户
   * @param id
   */
  async updateById(id, user): Promise<User> {
    const oldUser = await this.userRepository.findOne(id);
    delete user.password;
    const newUser = await this.userRepository.merge(oldUser, user);
    return this.userRepository.save(newUser);
  }

  /**
   * 更新指定用户密码
   * @param id
   */
  async updatePassword(id, user): Promise<User> {
    const existUser = await this.userRepository.findOne(id);
    const { oldPassword, newPassword } = user;

    if (
      !existUser ||
      !(await User.comparePassword(oldPassword, existUser.password))
    ) {
      throw new HttpException(
        '用户名或密码错误',
        // tslint:disable-next-line: trailing-comma
        HttpStatus.BAD_REQUEST
      );
    }

    let hashNewPassword = User.encryptPassword(newPassword);
    const newUser = await this.userRepository.merge(existUser, {
      password: hashNewPassword,
    });
    return this.userRepository.save(newUser);
  }
}
