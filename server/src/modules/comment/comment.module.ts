import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { ArticleModule } from '../article/article.module';
import { SettingModule } from '../setting/setting.module';
import { SMTPModule } from '../smtp/smtp.module';
import { UserModule } from '../user/user.module';
import { MsgModule } from '../msg/msg.module';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { Comment } from './comment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Comment]),
    AuthModule,
    ArticleModule,
    SettingModule,
    SMTPModule,
    UserModule,
    MsgModule
  ],
  controllers: [CommentController],
  providers: [CommentService],
  exports: [CommentService]
})
export class CommentModule { }
