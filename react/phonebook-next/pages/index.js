import React from "react";
import SearchBox from "../components/SerachBox";
import ContactList from "../components/ContactList";
import Tap from "../components/Tap";
import Details from "../components/Details";
import { useRecoilValue } from "recoil";
import { tapState } from "../store/atom";

const Home = ({ Component, pageProps }) => {
  const tap = useRecoilValue(tapState);

  const tapRender = () => {
    if (tap == "details") return <Details />;
    else return <Tap />;
  };

  return (
    <div className="container">
      <h1 className="subject">진보라의 연락처 - next.js</h1>
      <div className="contact-wrap">
        <div className="col left">
          <SearchBox />
          <ContactList />
        </div>
        <div className="col right">{tapRender()}</div>
      </div>
    </div>
  );
};

export default Home;
