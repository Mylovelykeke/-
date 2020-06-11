import {
    Controller,
    Get,
    Param
} from '@nestjs/common';

import { MsgService } from './msg.service';
@Controller('msg')
export class MsgController {
    constructor(
        private readonly msgService: MsgService
    ) { }

    /**
    *拉取通知
    * @param comment
    */
    @Get(':id')
    getMsg(@Param('id') id) {
        return this.msgService.getMessage(id);
    }
}
