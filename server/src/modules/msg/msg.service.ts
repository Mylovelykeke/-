import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Msg } from './msg.entity';
import { Repository } from 'typeorm';
import { CommentService } from '../comment/comment.service';
@Injectable()
export class MsgService {
    constructor(
        @InjectRepository(Msg)
        private readonly msgRepository: Repository<Msg>
    ) { }

    /**
     * 获取通知
     * 
     */
    async getMessage(id):Promise<any> {
        const query = await this.msgRepository
            .createQueryBuilder('msg')
            .andWhere('msg.user_id=:userId')
            .setParameter('userId', id)
            .orderBy('msg.createAt', 'DESC')
        const { page = 1, pageSize = 12 } = {
            'page': 1,
            'pageSize': 12
          };
        query.skip((+page - 1) * +pageSize);
        query.take(+pageSize);
        const [data, total] = await query.getManyAndCount();
        return [data, total]
    }

    /**
     * 创建
     * 
     */
    async created(data): Promise<Msg[]> {
        data.read_status = 0
        const newMsg = await this.msgRepository.create(data);
        await this.msgRepository.save(data);
        return newMsg;
    }
}
