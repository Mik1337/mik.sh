import TypeIt from "typeit-react";
import { GITHUB, TWITTER, WEBSITE } from "common/urls";

const AboutMe = () => {
  return (
    <div>
      <h2
        style={{
          fontSize: 72,
        }}
      >
        about me
      </h2>
      <p
        style={{
          fontSize: 50,
          maxWidth: "50vw",
        }}
      >
        i like breaking and making things
      </p>

      <p
        style={{
          fontSize: 50,
          maxWidth: "50vw",
        }}
      >
        i’ve worked roles in manufacturing industries, startups and NGOs, my
        interest lies where i’m challenged.
      </p>
    </div>
  );
};

export default AboutMe;
