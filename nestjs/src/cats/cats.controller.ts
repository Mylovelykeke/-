import { Controller, Get, Req, Res, HttpException, Post, HttpStatus, HttpCode, Header, Param, Body, UseFilters } from '@nestjs/common';
import { CatsService } from './cats.service';
import { ForbiddenException } from '../common/forbidden.exception';
class CreateCatDto {
   readonly name: string;
   readonly age: number;
   readonly breed: string;
}
class Cat {
    readonly name:string;
    readonly age:number;
 }
@Controller('cats')
export class CatsController {
    @Get()
    async create(@Body() createCatDto: CreateCatDto) {
        throw new ForbiddenException();
    }
}
