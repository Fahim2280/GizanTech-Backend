import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { TemperatureService } from './temperature.service';
import { Throttle } from '@nestjs/throttler';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('temperature')
export class TemperatureController {
  constructor(private readonly temperatureService: TemperatureService) {}

  @Get('/temperatureData')
  //@UseGuards(JwtAuthGuard)
  @Throttle({ default: { limit: 100, ttl: 1 } }) // Allow 100 requests per second
  async getTemperature() {
    try {
      const temperature = this.temperatureService.generateRandomTemperature();
      return {
        temperature: `${temperature}°C`,
        unit: 'Celsius',
        timestamp: new Date().toISOString(),
      };
    } catch (error) {
      throw new HttpException(
        'Internal Server Error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
