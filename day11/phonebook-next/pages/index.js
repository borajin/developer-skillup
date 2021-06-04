import React from "react";
import SearchBox from "../components/SerachBox";
import ContactList from "../components/ContactList";
import AddTAp from "../components/AddTap";
import Details from "../components/Details";
import { useRecoilValue } from "recoil";
import { addTapState } from "../store/atom";

const Home = ({ Component, pageProps }) => {
  const addTap = useRecoilValue(addTapState);

  return (
    <div className="container">
      <h1 className="subject">진보라의 연락처 - next.js</h1>
      <div className="contact-wrap">
        <div className="col left">
          <SearchBox />
          <ContactList />
        </div>
        <div className="col right">{addTap ? <AddTap /> : <Details />}</div>
      </div>
    </div>
  );
};

export default Home;
