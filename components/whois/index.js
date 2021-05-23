import TypeIt from "typeit-react";
import { GITHUB, WEBSITE } from "../../common/urls";

const WhosIs = ({ tag }) => {
  return (
    <h1>
      <TypeIt
        options={{
          strings: [`<${tag}>$ whois mik.sh</${tag}>`],
          lifeLike: true,
          waitUntilVisible: true,
          html: true,
          cursor: false,
        }}
      />
      <TypeIt
        options={{
          strings: `% This query returned 1 object<br />
        <h2>FULL STACK DEVELOPER</h2>
        name: Mik<br />
        address: <a href="${WEBSITE}">${WEBSITE}</a><br />
        github: <a href="${GITHUB}">@Mik1337</a><br />
        status: ACTIVE,
        `,
          startDelay: 3000,
          speed: 1,
          lifeLike: true,
          waitUntilVisible: true,
          html: true,
          cursor: false,
        }}
      />
    </h1>
  );
};

export default WhosIs;
