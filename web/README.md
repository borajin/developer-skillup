# Web

## 배경

우리의 코드는 웹 브라우저로 돌아가니 `브라우저 동작` 을 알아야 한다

## 웹페이지 로드 과정

url 입력 > 특정 웹서버 검색 > 서버의 파일을 화면에 뿌리는 게 웹 브라우저의 역할
한번 요청에 파일 하나 > html 파일 안에 css, js 파일을 요청하는 문을 head 에 명시 > js 에서의 요청문들도 실행

## html

여러 `태그`들(엘리먼트들)이 트리 구조로 되어 있음 (DOM tree)

## 웹서버 만들고 웹 생성하는 실습

`nginx` 설치 : 웹서버 역할을 함
`localhost:8080` 접속 (테스트)

nginx.cofig : 어떤 파일을 웹서버에 띄울지 등에 대한 내용들이 있음
여기서 `Location` 의 `root 경로`를 내가 만든 폴더로 변경

```
cd /usr/local/etc/nginx
vi /usr/local/etc/nginx/nginx.config
```

참고) terminal command

- 경로확인 : Pwd
- vi 편집기 명령어
  - i 입력
  - :wq! 저장후 닫기
  - esc 모드 변경

## 실습 결과

`server/js.js` > 텍스트로 보임
`server/html.html` > 파싱되어서 보임

그래서 모든 웹은 `html` 로 시작함

## 크로스 브라우징

우리 웹은 다양한 웹브라우저 환경에서 돌아갈 것이므로 `크로스 브라우징 대응` 해야됨

# work process

기획 > 디자인 > 마크업(퍼블리싱) > 기획검수 > 개발 > QA 검수 > 배포

# css

- `box-sizing` : border-box / content-box
  - `border-box` : margin, padding, border 전부 포함해서 width 계산
  - `content-box` : content만 width 계산
- `position`
  기본적으로 상위 element 의 position 을 참고하여 top, left, right, bottom 을 조정하므로
  만약 바로 상위 element 에 Position이 없다면 그 상위노드, 그 상위노드를 검색함.
  - `static` : 기본값
  - `absolute` : 요소 겹치기. z-index 로 겹치는 순서 정함
  - `fixed` : fixed는 무조건 doby 기준으로. 스크롤 내려도 위치 고정.
  - `relative` : 자기 원래 위치에서 움직임.
  - `sticky` : 한 위치에 고정되어 있고, 스크롤 내리다가 해당 위치에 도달하면 그 이후 스크롤 내릴 시 붙어있음
