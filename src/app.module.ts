import { Module } from '@nestjs/common';
import { DivisionModule } from './division/division.module';

@Module({
  imports: [DivisionModule],
})
export class AppModule {}
