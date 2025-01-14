import { Module } from '@nestjs/common';
import { DivisionController } from './division.controller';
import { DivisionService } from './division.service';

@Module({
  controllers: [DivisionController],
  providers: [DivisionService],
})
export class DivisionModule {}
