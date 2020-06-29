import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn
  } from 'typeorm';
  
  @Entity()
  export class Like {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    userId: string;

    @Column()
    articleId: string;

    @CreateDateColumn({
      type: 'datetime',
      comment: '创建时间',
      name: 'create_at',
    })
    createAt: Date;
  }
  