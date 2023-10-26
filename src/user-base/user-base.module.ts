import { Module } from '@nestjs/common';
import { UserBaseController } from './user-base.controller';
import { UserBaseService } from './user-base.service';

@Module({
  controllers: [UserBaseController],
  providers: [UserBaseService],
})
export class UserBaseModule {}
