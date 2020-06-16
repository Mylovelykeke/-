import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Report } from './report.entity';
import { Repository } from 'typeorm';
import { ArticleService } from '../article/article.service';

@Injectable()
export class ReportService {
    constructor(
        @InjectRepository(Report)
        private readonly reportRepository: Repository<Report>,
        private readonly articleService:ArticleService
    ) { }

    /**
     * 保存举报
     * @param reports
     */
    async saveReport(reports: Partial<Report>): Promise<Report> {
        let { author, reportedId } = reports;
        let existinfo = await this.reportRepository.findOne({ 'author': author, 'reportedId': reportedId });
        if (existinfo) {
            throw new HttpException('举报已存在', HttpStatus.BAD_REQUEST);
        }
        const newReport = await this.reportRepository.create(reports);
        await this.reportRepository.save(newReport);
        return newReport;
    }

    /**
     * 获取举报列表
     * 
     */
    async findList(){
        let data = await this.reportRepository
        .createQueryBuilder('report')
        .orderBy('report.createAt', 'DESC')
        .getMany()
        
        for(let item of data){
            if(item.reportedType === '0'){
               let article =  await this.articleService.findById(item.reportedId)
               Object.assign(item,{article:article})
            }
        }
        return data
    }
}