import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();    //make request to different domain
  app.use(             //read session data of client request and save in cookies
    cookieSession({
      keys: ['test'],
    }),
  );
  await app.listen(3000);
}
bootstrap();
