import TypeIt from "typeit-react";
import { GITHUB, TWITTER, WEBSITE } from "common/urls.json"; // apparently this is bad practice, but it works?

const WhoIsMobile = () => {
  return (
    <div className="container">
      <h1>
        <TypeIt
          options={{
            strings: ["<h2>whois mik.sh</h2>"],
            lifeLike: true,
            waitUntilVisible: true,
            html: true,
            cursor: false,
          }}
        />
      </h1>

      <h2>
        <TypeIt
          options={{
            strings: `name: Mik<br />
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
      </h2>
      <style jsx>{`
        // conver entire view to a flexbox
        .container {
          padding-top: 25vh;
          padding-left: 2em;
          /* window size */
          width: 100%;
          height: 100vh;
          /* background image */
          background-image: url(https://media.giphy.com/media/UYBDCJjwOd9Re/giphy.gif);
          /* Create the parallax scrolling effect */
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
      `}</style>
    </div>
  );
};

export default WhoIsMobile;
