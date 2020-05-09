import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
} from 'typeorm';
import { Article } from '../article/article.entity';

@Entity()
export class File {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  originalname: string; // 文件名

  @Column()
  filename: string; // 文件名

  @Column()
  type: string; // 文件信息

  @Column()
  size: number; // 文件大小

  @Column()
  url: string;

  @ManyToMany(
    () => Article,
    article => article.files
  )
  articles: Array<Article>;

  @CreateDateColumn({
    type: 'datetime',
    comment: '创建时间',
    name: 'create_at',
  })
  createAt: Date;
}
