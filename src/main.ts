import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { con } from "./connection.db";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
