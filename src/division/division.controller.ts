import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { DivisionService } from './division.service';
import { DivisionDto } from './division.dto';
import { DivisionResult } from './division-result.interface';
import { ResultInterceptor } from './result.interceptor';

@Controller('div')
@UseInterceptors(ResultInterceptor)
export class DivisionController {
  constructor(private readonly divisionService: DivisionService) {}

  @Get()
  getDivisionResult(@Query() query: DivisionDto): DivisionResult {
    const result = this.divisionService.divide(query.a, query.b);
    return {
      a: query.a,
      b: query.b,
      result: result,
    };
  }
}
