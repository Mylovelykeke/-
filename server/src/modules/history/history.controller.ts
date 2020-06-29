import { Controller, Post, Body, Get, Param, Query } from '@nestjs/common';
import { HistoryService } from './history.service'
@Controller('history')
export class HistoryController {
    constructor(
        private readonly historyService: HistoryService
    ) { }
    @Post()
    create(@Body() Body) {
        return this.historyService.save(Body)
    }
    
     /**
     * 数量
     */
    @Get('/count')
    findCount(@Query() queryParams) {
        return this.historyService.findCount(queryParams)
    }
    
    // 获取所有历史
    @Get(':id')
    findById(@Param('id') id){
        return this.historyService.findById(id);
    }
}
