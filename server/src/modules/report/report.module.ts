import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { Report } from './report.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleModule } from '../article/article.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([Report]),
        ArticleModule
    ],
    exports: [ReportService],
    providers: [ReportService],
    controllers: [ReportController]
})
export class ReportModule { }
