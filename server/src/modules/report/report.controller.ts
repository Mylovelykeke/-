import { Controller, Get, Post, Body} from '@nestjs/common';
import { ReportService } from './report.service';

@Controller('report')
export class ReportController {
    constructor(
        private readonly reportService:ReportService
    ){}
    @Get()
    getInfo(){
        return this.reportService.findList()
    }

    /**
     * 保存举报
     * 
     */
    @Post()
    saveReport(@Body() reports){
        return this.reportService.saveReport(reports)
    }
}
