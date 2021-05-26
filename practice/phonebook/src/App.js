import React, { useState } from "react";
import "./App.css";
import { PhoneData } from "./data/PhoneData.json";
import SearchBox from "./components/SerachBox";
import ContactList from "./components/ContactList";
import Details from "./components/Details";

function App() {
  const [selectedData, setSelectedData] = useState();
  const [search, setSearch] = useState({ input: "", data: PhoneData });

  const onInputChange = (e) => {
    const input = e.target.value;

    setSelectedData();
    setSearch({ input, data: searchContact("name", input) });
  };

  const onContactClick = (id) => {
    console.log(searchContact("id", id));
    setSelectedData(searchContact("id", id));
  };

  const searchContact = (type, searchKeyword) => {
    if (type === "name") {
      return PhoneData.filter((data) => {
        if (data.name.indexOf(searchKeyword) > -1) {
          return data;
        }

        return;
      });
    } else if (type === "id") {
      return PhoneData.find((data) => {
        if (data.id === Number(searchKeyword)) {
          return true;
        }

        return false;
      });
    }
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
