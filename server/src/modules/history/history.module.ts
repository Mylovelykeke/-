import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { History } from './history.entity';
import { HistoryService } from './history.service';
import { HistoryController } from './history.controller';
import { ArticleModule } from '../article/article.module';

@Module({
    imports:[TypeOrmModule.forFeature([History]),ArticleModule],
    exports:[HistoryService],
    controllers:[HistoryController],
    providers:[HistoryService]
})
export class HistoryModule {}
 