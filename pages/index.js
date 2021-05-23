import Head from "next/head";
import WhosIs from "components/whois";
import Responsive from "react-responsive";

const MobileWrapper = (props) => <Responsive {...props} maxWidth={575} />;
const TabletUpWrapper = (props) => <Responsive {...props} minWidth={576} />;

const Home = () => {
  return (
    <div>
      <Head>
        <title>mik.sh</title>
        <meta name="description" content="mik.sh" />
        <link rel="shortcut icon" width="60px" href="/fav.png" />
      </Head>

      <main>
        <TabletUpWrapper>
          <WhosIs tag={"h1"} />
        </TabletUpWrapper>
        <MobileWrapper>
          <WhosIs tag={"h4"} />
        </MobileWrapper>
      </main>
    </div>
  );
};

export default Home;
