import { Controller, Get, Query, Post, Body, Param } from '@nestjs/common';
import { LikeService } from './like.service'
@Controller('like')
export class LikeController {
    constructor(private readonly likeService: LikeService) { }
    /**
     * 全部收藏
     */
    @Get()

    findAll(@Query() queryParams) {
        return this.likeService.findAll(queryParams)
    }
    /**
     * 数量
     */
    @Get('count')

    findCount(@Query() queryParams) {
        return this.likeService.findCount(queryParams)
    }

    /**
     * 添加收藏
     */
    @Post()
    create(@Body() like){
        return this.likeService.save(like)
    }

    /**
     * 删除收藏
     * @param id
     */
    @Post('delete')
    // @Roles('admin')
    // @UseGuards(JwtAuthGuard)
    deleteById(@Body('id') id) {
        return this.likeService.deleteById(id);
    }
}


