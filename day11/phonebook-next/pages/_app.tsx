import "../styles/globals.css";
import React from "react";
import { RecoilRoot } from "recoil";

const MyApp = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default MyApp;
