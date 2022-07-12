import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { RenderService } from 'nest-next';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const service = app.get(RenderService);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await app.listen(3000);
}
bootstrap();
