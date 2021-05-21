import TypeIt from "typeit-react";

const WhosIs = () => {
  return (
    <h1>
      <TypeIt
        options={{
          strings: ["<h3>$ whois mik.sh</h3>"],
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
        address: <a href="https://mik.sh">https://mik.sh</a><br />
        github: <a href="https://github.com/mik1337">@Mik1337</a><br />
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
