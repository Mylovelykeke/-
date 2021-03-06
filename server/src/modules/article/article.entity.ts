import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { File } from '../file/file.entity'
import { Tag } from '../tag/tag.entity';
import { Category } from '../category/category.entity';
import { User } from '../user/user.entity';
  
@Entity()
export class Article {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ default: null })
  type: string;

  @Column()
  openid: string;

  @Column({ default: null })
  locationinfo: string;

  @Column({ default: null })
  cover: string; // 封面图

  @Column({ type: 'text', default: null })
  summary: string; // 摘要，自动生成

  @Column({ type: 'mediumtext', default: null, charset: 'utf8mb4' })
  content: string; // 原始内容

  @ManyToOne(
    () => Category,
    category => category.articles,
    { cascade: true }
  )   
  @JoinTable()
  category: Category; 

  @ManyToOne(
    () => User,
    user => user.articles,
    { cascade: true }
  )  

  @JoinTable()
  user: User;

  @ManyToMany(
    () => Tag,
    tag => tag.articles,
    { cascade: true }
  )
  @JoinTable()
  tags: Array<Tag>;

  @ManyToMany(
    () => File,
    file => file.articles,
    { cascade: true }
  )
  @JoinTable()
  files: Array<File>;


  @Column('simple-enum', { enum: ['draft', 'publish'] })
  status: string; // 文章状态

  @Column({ type: 'int', default: 0 })
  views: number; // 阅读量

  @Column({ type: 'text', default: null, select: false })
  password: string;

  @Column({ type: 'boolean', default: false })
  needPassword: boolean;

  @Column({ type: 'boolean', default: true })
  isCommentable: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  publishAt: Date; // 发布日期

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
}
