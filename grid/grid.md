# 그리드 개념

[RealGrid 공식 문서](https://docs.realgrid.com/start/overview)

- `GridView` : 눈에 보이는 부분 담당하는 객체
- `DataProvider` : 그리드의 데이터 관리 객체
- `DataField` : 데이터 저장하는 논리적인 장소 담당 객체
- `DataColumn` : 그리드 내 셀들 관리
- `fields` : header 에 대한 명세
- `columns` : 컬럼 안에 들어가는 내용에 대한 명세
- `rows` : 실제 데이터들

참고) gird 는 높이를 수동으로 잡아줘야함!!

# 설치

```
yarn add realgrid
```

## 라이선스 등록

- html

```html
<script
  type="text/javascript"
  src="https://static.wehago.com/realgrid2/realgrid-lic.js"
></script>
```

## 도메인 연결

localhost 로 실행 안됨. lululala 로 실행해야 함.

- terminal

```
sudo vi /private/etc/hosts
...
127.0.0.1		www.lululala.co.kr  추가
```

- css(head)

```css
<link rel="stylesheet" href="https://static.wehago.com/realgrid2/realgrid-style.css">
```

## localhost 쓰고싶을 때

라이선스 등록 지우고 head 에 추가

- html

```html
<script>
  var realGrid2Lic =
    "upVcPE+wPOmtLjqyBIh9RkM/nBOseBrflwxYpzGZyYm9cY8amGDkiMnVeQKUHJDjW2y71jtk+wteqHQ1mRMIXzEcGIrzZpzzNTakk0yR9UcO/hzNodVsIiqQNVtxmmYt";
</script>
```
