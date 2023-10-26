import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserBaseModule } from './user-base/user-base.module';

@Module({
  imports: [UserBaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
