import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()

export class Report {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    /**
     * 0. 低俗色情 1. 垃圾广告 2. 内容低俗无意义
     * 3. 辱骂攻击 4. 其他违法信息 5. 抄袭我的内容
     * 6. 暴露我的隐私 7. 内容里有关于我的不实描述
     */
    @Column()
    reasonType: string; // 原因类型   

    @Column()
    reason: string; // 原因
    
    @Column()
    reportedType:string; // 被举报的类型 0.文章 1.评论 2.用户

    @Column()
    reportedId: string; //被举报id

    @Column()
    author: string;  // 举报人

    @Column({ default: false })
    status:boolean;

    @CreateDateColumn({
        type: 'datetime',
        comment: '创建时间',
        name: 'create_at',
    })
    createAt: Date;
}