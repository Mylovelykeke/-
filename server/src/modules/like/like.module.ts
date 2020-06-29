import { Module } from '@nestjs/common';
import { LikeService } from './like.service';
import { LikeController } from './like.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Like } from './like.entity';
import { ArticleModule } from '../article/article.module';

@Module({
    imports:[TypeOrmModule.forFeature([Like]),ArticleModule],
    exports:[LikeService],
    controllers:[LikeController],
    providers:[LikeService]
})
export class LikeModule {}
