import NavBar from "../shared-components/NavBar";
import IntroSection from "../components/IntroSection";
import MiddleSection from "../components/MiddleSection";
import FooterSection from "../shared-components/FooterSection";
import Banner from "./Banner";

const LandingPage = () => {
  return (
    <>
      {/* <Banner /> */}
      <NavBar />
      <section>
        <IntroSection />
      </section>
      <section>
        <MiddleSection />
      </section>
      <footer>
        <FooterSection />
      </footer>
    </>
  );
};

export default LandingPage;
