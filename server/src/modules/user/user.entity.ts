import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import * as bcrypt from 'bcryptjs';
import { Article } from '../article/article.entity';
import { Comment } from '../comment/comment.entity';

@Entity()
export class User {
  /**
   * 检测密码是否一致
   * @param password0 加密前密码
   * @param password1 加密后密码
   */
  static async comparePassword(password0, password1) {
    return bcrypt.compareSync(password0, password1);
  }

  static encryptPassword(password) {
    return bcrypt.hashSync(password, 10);
  }

  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 500 })
  nickName: string;

  @Exclude()
  @Column({ length: 500, select: false })
  password: string;

  @Column({ length: 500, default: null })
  openid: string;

  @Column({ length: 500, default: null })
  avatarUrl: string; // 头像

  @Column({ length: 500, default: null })
  email: string; // 邮箱

  @Column({ length: 500, default: null })
  province: string; // 城市

  @Column({ length: 500, default: null })
  city: string; // 城市

  @Column({ length: 500, default: null })
  country: string; // 国家

  @Column({ length: 500, default: null })
  language: string; // 语言

  @Column({ default: null })
  gender: number; // 国家

  @Column('simple-enum', { enum: ['admin', 'visitor'], default: 'visitor' })
  role: string; // 用户角色

  @Column('simple-enum', { enum: ['locked', 'active'], default: 'active' })
  status: string; // 用户状态

  @OneToMany(
    () => Article,
    article => article.user
  )
  articles: Array<Article>;

  @OneToMany(
    () => Comment,
    comment => comment.author
  )
  comment: Array<Comment>;

  @OneToMany(
    () => Comment,
    replycomment => replycomment.replyUser
  )
  replycomment: Array<Comment>;

  @CreateDateColumn({
    type: 'datetime',
    comment: '创建时间',
    name: 'create_at',
  })
  createAt: Date;

  @UpdateDateColumn({
    type: 'datetime',
    comment: '更新时间',
    name: 'update_at',
  })
  updateAt: Date;

  /**
   * 插入数据前，对密码进行加密
   */
  @BeforeInsert()
  encrypt() {
    this.password = bcrypt.hashSync(this.password, 10);
  }
}
