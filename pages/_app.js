import "styles/globals.css";
import { Global } from "@emotion/react";
import { globalCSS } from "styles/globals";
import React from "react";

const WebApp = ({ Component, pageProps }) => {
  return (
    <>
      <Global styles={globalCSS} />
      <Component {...pageProps} />
    </>
  );
};

export default WebApp;
