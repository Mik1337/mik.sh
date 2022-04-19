import Head from "next/head";
import WhosIs from "components/whois";
import Responsive from "react-responsive";
import RightImagePanel from "components/rightimagepanel";
import AboutMe from "components/aboutme";
import Container from "containers/Container";

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
          <Container>
            <WhosIs left />
            <RightImagePanel right />
          </Container>
        </TabletUpWrapper>
        <MobileWrapper>
          <WhosIs tag={"h4"} />
        </MobileWrapper>
      </main>
    </div>
  );
};

export default Home;
