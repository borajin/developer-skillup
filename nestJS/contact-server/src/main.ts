import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //데코레이터가 없는 속성은 없애고 저장함
      forbidNonWhitelisted: true, //화이트리스트에서 유효한 속성이 아닌 것이 있으면 httpException 을 던짐. whitelist가 먼저 true가 되어야 사용 가능.
      transform: true, //그 데이터에 맞게 타입을 transform 해줌
    }),
  );

  //cors 이슈 처리
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  await app.listen(3001);
}
bootstrap();
