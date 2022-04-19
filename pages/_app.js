import "styles/globals.css";
import { Global } from "@emotion/react";
import { globalCSS } from "styles/globals";
import React from "react";

const WebApp = ({ Component, pageProps }) => {
  return (
    <>
      <Global styles={globalCSS} />
      <Component {...pageProps} />
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-0XY0XBL7FZ `}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-0XY0XBL7FZ ', {
             page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};

export default WebApp;
