import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

  app.useLogger(logger);

  app.listen(3000).then(() => {
    logger.log('Application is running on: http://localhost:3000');
  });
}
bootstrap();
