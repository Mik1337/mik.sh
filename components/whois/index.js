import React from "react";
import TypeIt from "typeit-react";
import { GITHUB, TWITTER, WEBSITE } from "common/urls.json"; // apparently this is bad practice, but it works?

const WhosIs = ({ tag }) => {
  return (
    <>
      {/* starts from 1/3 of screen */}
      <div className="Big">
        <TypeIt
          options={{
            strings: [`<${tag}>$ whois mik.sh</${tag}>`],
            lifeLike: true,
            waitUntilVisible: true,
            html: true,
            cursor: false,
          }}
        />
        <br />
        <div className="Small">
          <TypeIt
            options={{
              strings: `% This query returned 1 person<br /><br />

        name: Mik<br />
        address: <a href="${WEBSITE.link}">${WEBSITE.name}</a><br />
        github: <a href="${GITHUB.link}">@${GITHUB.name}</a><br />
        twitter: <a href="${TWITTER.link}">@${TWITTER.name}</a><br />
        `,
              startDelay: 3000,
              speed: 1,
              lifeLike: true,
              waitUntilVisible: true,
              html: true,
              cursor: false,
            }}
          />
        </div>
      </div>
      <style jsx>{`
        .Big {
          max-height: 100vh;
          font-size: 4em;
          font-weight: bold;
          padding-top: 15vh;
        }

        .Small {
          max-height: 100vh;
          font-size: 2rem;
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default WhosIs;
