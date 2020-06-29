import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn
  } from 'typeorm';
  
  @Entity()
  export class History {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    userId: string;

    @Column()
    articleId: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    updateAt: Date; // 发布日期
  
    @CreateDateColumn({
      type: 'datetime',
      comment: '创建时间',
      name: 'create_at',
    })
    createAt: Date;
  }
  