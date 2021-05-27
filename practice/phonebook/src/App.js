import React, { useState } from "react";
import "./App.css";
import { PhoneData } from "./data/PhoneData.json";
import SearchBox from "./components/SerachBox";
import ContactList from "./components/ContactList";
import Details from "./components/Details";

function App() {
  const [selectedData, setSelectedData] = useState();
  const [search, setSearch] = useState({ input: "", data: PhoneData });

  const onContactClick = (id) => {
    console.log(searchContact("id", id));
    setSelectedData(searchContact("id", id));
  };

  return (
    <div className="container">
      <h1 className="subject">진보라의 연락처</h1>
      <div className="contact-wrap">
        <div className="col left">
          <SearchBox value={search.input} onInputChange={onInputChange} />
          <ContactList
            phoneData={search.data}
            onContactClick={onContactClick}
          />
        </div>
        <div className="col right">
          <Details selectedData={selectedData} />
        </div>
      </div>
    </div>
  );
}

export default App;
