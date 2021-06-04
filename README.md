# developer-skillup

## 실습 내용 배포

- [react phonebook](https://bora-phonebook-react.netlify.app/)
- [react + recoil phonebook](https://bora-phonebook-react-recoil.netlify.app)
- [react + typescript + next phonebook](https://phonebook-next.netlify.app)

## netlify 호스팅

[netlify 정적사이트 무료 호스팅](https://app.netlify.com/)

- react 배포 설정

1. github 와 연결
2. base directory : `package.json` 파일이 있는 경로 작성
3. publish directory : `base/build` 작성
4. build command : `yarn build`

- next 배포 설정

1. github 연결
2. base directory : `package.json` 파일 있는 경로
3. public directory : `base/.next` 작성
4. build command : `next build`
5. netlify plugin 설치
   - `plugin` 탭에서 next.js casche, essential 어쩌고 검색해 둘다 설치

# Summary

## React

set 을 두 번 호출해도 ㄱㅊ왜냐면 비동기로 실행되기 때문(아마도~)
그래고 각자 컴포넌트를 업데이트 하므로 신경 크게 안써도 됨

## Recoil

recoil 로 관리되는 state 는 memo 로 관리 안해줘도 알아서 챱챱 어쩌고 된다.

한 컴포넌트 안에서 쓰는 state 는 굳이 Recoil 로 x
useState 사용

## typescript

런타임 시 오류를 잡아줘서 너무 좋다~
변수타입, 함수리턴값타입, 함수인자타입, 컴포넌트타입 등등
props 타입 지정 시 type 보다는 Interface 사용 권장
ㅁㄴㅇㄹ:type > ㅁㄴㅇㄹ?:type 이렇게하면 옵션이 됨. 필수로 안넣어도 된다~

typesciprt 로 시작하려면
npx create-react-app my-app --template typescript

interface 의 name 은 앞에 I 를 붙이기
types 폴더로 interface 만들어 관리
컴포넌트 반환값은 굳이 명시 안해도 ㄱㅊ

set, reset function 타입도 지정해주기(매개변수 타입...)

## prettier

코드 정리해줌~

## NextJs

클라이언트 사이드 랜더링(React)

1. html 파일을 다운받는다
2. 빈화면! [사용자가 보는 시점]
3. api 호출해 데이터를 채운다.
4. js 코드가 돌면서 화면을 그린다 (화면이 깜빡임..)

서버 사이드 랜더링(Next.js - react 에 서버 사이드 렌더링을 제공하는 프레임워크)

1. html 파일을 다운받는다
2. api 호출하여 데이터를 채운다.
3. js 코드가 돌면서 화면을 그린다
4. 완성된 화면! [사용자가 보는 시점]

5. 프로젝트 생성 : npx create-next-app my-app
6. 컴파일 : yarn dev
7. pages 안의 index.js 가 시작점

pages 파일은 경로로 찾아갈 수 있음. (라우팅이 됨)

pages 에다가는 component 나 다른 폴더를 생성하면 안됨. 라우트할 애들만 넣기.
폴더는 상위폴더에다가 만들어서 불러오기

recoil 은 store.
type 은 types.

\*\* 데이터 가져오면 속도가 느려지므로 화면이 완성된 이후에 클라이언트 단에서 데이터를 가져오기로 한다.

## NestJS

백엔드.
spring 같은 애
얘부터 먼저 공부하기

## TypeORM

백엔드.
db 변경해도 호환됨
살짝 훑어만보기
