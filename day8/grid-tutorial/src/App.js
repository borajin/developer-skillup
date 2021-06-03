import React, { useEffect } from "react";
import { GridView, LocalDataProvider } from "realgrid";
import { columns, fields, rows } from "./realgrid-data";
import "./App.css";

function App() {
  /*

  js to ts > npx 실행

  그리드 설치 : yarn add realgrid
  라이선스 등록 : <script type="text/javascript" src="https://static.wehago.com/realgrid2/realgrid-lic.js"></script>
  도메인 연결 : 터미널에서 sudo vi /private/etc/hosts -> ::1 밑에 127.0.0.1		www.lululala.co.kr  추가

  css(head)
    <link rel="stylesheet" href="https://static.wehago.com/realgrid2/realgrid-style.css">

  도메인 localhost 쓰고싶을 때(head)
    <script>
      var realGrid2Lic = 'upVcPE+wPOmtLjqyBIh9RkM/nBOseBrflwxYpzGZyYm9cY8amGDkiMnVeQKUHJDjW2y71jtk+wteqHQ1mRMIXzEcGIrzZpzzNTakk0yR9UcO/hzNodVsIiqQNVtxmmYt';
      </script>

  <그리드 개념>
  - GridView : 눈에 보이는 부분 담당하는 객체
  - DataProvider : 그리드의 데이터 관리 객체
  - DataField : 데이터 저장하는 논리적인 장소 담당 객체
  - DataColumn : 그리드 내 셀들 관리

  중요: gird 는 높이를 수동으로 잡아줘야함!!

  fields : header 에 대한 명세
  columns : 컬럼 안에 들어가는 내용에 대한 명세
  rows : 실제 데이터들
  */

  useEffect(() => {
    //render 이후에 실행되어야 하므로 didmount 에 실행
    const provider = new LocalDataProvider(false); //data provider
    const gridView = new GridView("realgrid"); //ui. 매개변수 html 의 id 랑 매핑
    gridView.setDataSource(provider); //gridview 와 provider 연결

    provider.setFields(fields); //필드 세팅(저장소 세팅)
    gridView.setColumns(columns); //셀 세팅(필드랑 매칭)
    provider.setRows(rows); //실제 데이터 넣기
  }, []);

  return (
    <div className="App">
      <h2>RealGrid2 React Tutorial</h2>
      <div id="realgrid" style={{ height: 500, width: "auto" }}></div>
      {[].map(() => (
        <div>asf</div>
      ))}
    </div>
  );
}

export default App;
