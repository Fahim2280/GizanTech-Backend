import { Module } from '@nestjs/common';
import { TemperatureController } from './temperature.Controller';
import { TemperatureService } from './temperature.service';

@Module({
  controllers: [TemperatureController],
  providers: [TemperatureService],
})
export class TemperatureModule {}
