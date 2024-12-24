import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { TemperatureModule } from './temperature/temperature.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ThrottlerModule.forRoot([
      {
        ttl: 1, // Time to live in seconds
        limit: 100, // Maximum 100 requests per second
      },
    ]),
    TemperatureModule,
    AuthModule,
  ],
})
export class AppModule {}
