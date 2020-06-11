import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Query,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard, Roles } from '../auth/roles.guard';
import { CommentService } from './comment.service';

@Controller('comment')
@UseGuards(RolesGuard)
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  /**
   * 创建评论
   * @param comment
   */
  @Post()
  create(@Request() req, @Body() comment) {
    const userAgent = req.headers['user-agent'];
    return this.commentService.create(userAgent, comment);
  }

  /**
   * 获取所有评论
   */
  @Get()
  findAll(@Query() queryParams) {
    return this.commentService.findAll(queryParams);
  }

  /**
   * 获取单个用户评论及子集
   * @param id
   */
  @Get(':id')
  findById(@Param('id') id) {
    return this.commentService.findById(id);
  }

  /**
   * 
   * 获取用户下所有评论
   * @param id 
   */
  @Get('user/:id')
  findByUserId(@Param('id') id) {
    return this.commentService.getUserCommonList(id);
  }
  /**
   * 获取文章或页面评论
   * @param hostId
   */
  @Get('host/:hostId')
  getArticleComments(@Param('hostId') hostId, @Query() qurey) {
    return this.commentService.getArticleComments(hostId, qurey);
  }

  /**
   * 获取文章评论个数
   * 
   */
  @Get('count/:hostId')
  getArticlecount(@Param('hostId') hostId) {
    return this.commentService.getArticleCount(hostId);
  }

  /**
   * 更新评论
   * @param id
   * @param tag
   */
  @Patch(':id')
  @Roles('admin')
  @UseGuards(JwtAuthGuard)
  updateById(@Param('id') id, @Body() data) {
    return this.commentService.updateById(id, data);
  }

  /**
   * 删除评论
   * @param id
   */
  @Delete(':id')
  @Roles('admin')
  @UseGuards(JwtAuthGuard)
  deleteById(@Param('id') id) {
    return this.commentService.deleteById(id);
  }
}
