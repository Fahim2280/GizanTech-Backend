import { Injectable } from '@nestjs/common';

@Injectable()
export class TemperatureService {
  generateRandomTemperature(): number {
    return Math.floor(Math.random() * (45 - 15 + 1)) + 15; // Random temperature between 15 and 45
  }
}
