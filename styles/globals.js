import { css } from "@emotion/react";

export const globalCSS = css`
  html {
    min-height: 100%;
    overflow: hidden;
  }
  body {
    height: calc(100vh - 8em);
    padding: 4em;
    color: rgba(255, 255, 255, 0.75);
    font-family: "Anonymous Pro", monospace;
    background-color: rgb(25, 25, 25);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
