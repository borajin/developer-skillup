## 쓰는 이유

프레임워크 역할

- 개발자가 필요한 것들, 세팅들을 자동으로..

타입스크립트 기반

- 프론트엔드와 언어 일치

TypeORM

- 데이터베이스 연결 유연하게...
- 쿼리빌더도...

## 프로젝트 생성

nest 설치

```
npm i -g @nestjs/cli
```

nest 프로젝트 생성

```
nest new contact-server
```

서버 실행

```
yarn run start:dev
```

## 컨트롤러, 서비스, 모듈 생성

generate controller contacts

```
nest g co contacts
```

generate service contacts

```
nest g s contacts
```

generate module contacts

```
nest g mo contacts
```

## nest 구조

`src/main.ts` 가 시작점

controller 가 service 를 호출하고 controller 는 app module 이 호출

- service : 로직. 실제 구현 내용
- controller : route 역할. A url 로 들어오면 A service 를 호출
- module : controller + service.
