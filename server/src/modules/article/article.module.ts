import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { ArticleService } from './article.service';
import { TagModule } from '../tag/tag.module';
import { FileModule} from '../file/file.module';
import { CategoryModule } from '../category/category.module';
import { ArticleController } from './article.controller';
import { Article } from './article.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Article]),
    CategoryModule,
    TagModule,
    UserModule,
    AuthModule,
    FileModule
  ],
  exports: [ArticleService],
  providers: [ArticleService],
  controllers: [ArticleController],
})
export class ArticleModule {}
