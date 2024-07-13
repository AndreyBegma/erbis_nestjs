import { Injectable } from '@nestjs/common';

@Injectable()
export class DivisionService {
  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  }
}