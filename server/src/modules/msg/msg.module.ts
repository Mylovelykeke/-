import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MsgService } from './msg.service';
import { MsgController } from './msg.controller';
import { Msg } from './msg.entity';
@Module({
    imports: [
        TypeOrmModule.forFeature([Msg])
    ],
    controllers: [MsgController],
    providers: [MsgService],
    exports: [MsgService]
})
export class MsgModule {}
