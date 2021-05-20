import Head from "next/head";
import TypeIt from "typeit-react";
import Responsive from "react-responsive";

const MobileWrapper = (props) => <Responsive {...props} maxWidth={575} />;
const TabletUpWrapper = (props) => <Responsive {...props} minWidth={576} />;

export default function Home() {
  return (
    <div>
      <Head>
        <title>mik.sh</title>
        <meta name="description" content="mik.sh" />
        <link rel="shortcut icon" width="60px" href="/fav.png" />
      </Head>

      <main>
        <TabletUpWrapper>
          <h1>
            <TypeIt element={"h1"}>$ curl mik.sh</TypeIt>
          </h1>
        </TabletUpWrapper>
        <MobileWrapper>
          <h2>
            <TypeIt element={"h3"}>$ curl mik.sh</TypeIt>
          </h2>
        </MobileWrapper>
      </main>
    </div>
  );
}
