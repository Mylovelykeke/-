import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { History } from './history.entity';
import { Repository } from 'typeorm';
import { ArticleService } from '../article/article.service';
import dayjs = require('dayjs');

@Injectable()
export class HistoryService {
    constructor(
        @InjectRepository(History)
        private readonly historyRepository: Repository<History>,
        private readonly articleService: ArticleService
    ) { }

    async save(queryParams) {
        let { userId, articleId } = queryParams
        const oldHistory = await this.historyRepository.findOne({
            where: {
                userId: userId,
                articleId: articleId
            }
        })
        if (oldHistory) {
            const updatedHistory = await this.historyRepository.merge(oldHistory, {
                updateAt: dayjs().add(8, 'hour').format('YYYY-MM-DD HH:mm:ss')
            });
            return this.historyRepository.save(updatedHistory);
        } else {
            const data = await this.historyRepository.save(queryParams);
            return data
        }
    }

    /**
      * 获取指定记录
      * @param id
      */
    async findById(id): Promise<History[]> {
        const data = await this.historyRepository
            .createQueryBuilder('history')
            .where('history.userId=:openid')
            .setParameter('openid', id)
            .orderBy('history.updateAt', 'DESC')
            .getMany()
        for (let d of data) {
            let id = d.articleId
            let article = await this.articleService.findById(id)
            Object.assign(d, { article })
        }
        return data
    }

    /**
     * 获取数量
     * @param queryParams 
     */
    async findCount(queryParams): Promise<Number> {
        const { openid } = queryParams
        const data = await this.historyRepository
            .createQueryBuilder('history')
            .where('history.userId=:openid')
            .setParameter('openid', openid)
            .getCount()
        return data
    }
}
