import {
    Entity,
    PrimaryGeneratedColumn,
    Column, CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';

@Entity()

export class Msg {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    user_id: string;

    @Column()
    message_id: string;

    @Column('simple-enum', { enum: [0, 1] })
    read_status: string;  //阅读状态

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