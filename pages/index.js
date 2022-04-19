import Head from "next/head";
import WhosIs from "components/whois";
import Responsive from "react-responsive";
import RightImagePanel from "components/rightimagepanel";
// import AboutMe from "components/aboutme";
import TopContainer from "containers/TopContainer";
import Contactme from "components/contactme";
import ContactMeMobile from "components/contactme/Mobile";
import BottonContainer from "containers/BottomContainer";
import WhoIsMobile from "components/whois/mobile";
import MobileContainer from "containers/mobile/MobileTopContainer";

const MobileWrapper = (props) => <Responsive {...props} maxWidth={575} />;
const TabletUpWrapper = (props) => <Responsive {...props} minWidth={576} />;

const Home = () => {
  return (
    <div>
      <Head>
        <title>mik.sh</title>
        <meta name="description" content="mik.sh" />
        <link rel="shortcut icon" width="60px" href="/fav.png" />
        <script src="//embed.typeform.com/next/embed.js"></script>
      </Head>

      {/* split into 4 sections vertically */}
      <main>
        <TabletUpWrapper>
          <div className="firstContainer">
            <TopContainer backgroundImage="https://media.giphy.com/media/UYBDCJjwOd9Re/giphy.gif">
              <WhosIs left />
              <RightImagePanel right />
            </TopContainer>
          </div>

          <div className="secondContainer">
            <BottonContainer backgroundImage="https://media.giphy.com/media/xVn3ZmKrKIOLS/giphy.gif">
              <div left>Henlo, i like making stuff UwU</div>
              <Contactme right />
            </BottonContainer>
          </div>
        </TabletUpWrapper>
        <MobileWrapper>
          <MobileContainer>
            <WhoIsMobile />
            <div>hello world</div>
            <ContactMeMobile />
          </MobileContainer>
        </MobileWrapper>
      </main>
      <style jsx>{`
        .firstContainer {
          /* window size */
          width: 70vw;
          height: 100vh;
          /* background image */
          // background-image: url(https://media3.giphy.com/media/aGeePr7nv6ra8/giphy.gif?cid=790b7611fa40cdf73179d066e872cb478a762233b67d6b28&rid=giphy.gif);
          /* Create the parallax scrolling effect */
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        
        .secondContainer {
          /* window size */
          width: 100%;
          height: 100vh;
          /* background image */
          background-image: url(./assests/windows-giphy.gif);
          /* Create the parallax scrolling effect */
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }
        }
      `}</style>
    </div>
  );
};

export default Home;
