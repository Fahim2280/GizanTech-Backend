import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');
  const cors = require('cors');

  app.useLogger(logger);
  //app.enableCors();
  app.use(cors());
  app.listen(7000).then(() => {
    logger.log('Application is running on: http://localhost:7000');
  });
}
bootstrap();
