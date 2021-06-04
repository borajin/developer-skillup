import React from "react";
import "./App.css";

import SearchBox from "./components/SerachBox";
import ContactList from "./components/ContactList";
import Details from "./components/Details";

function App() {
  return (
    <div className="container">
      <h1 className="subject">진보라의 연락처 - recoil</h1>
      <div className="contact-wrap">
        <div className="col left">
          <SearchBox />
          <ContactList />
        </div>
        <div className="col right">
          <Details />
        </div>
      </div>
    </div>
  );
}

export default App;
