import NavBar from "../shared-components/NavBar";
import IntroSection from "../components/IntroSection";
import MiddleSection from "../components/MiddleSection";

const LandingPage = () => {
  return (
    <>
      <nav>
        <NavBar />
      </nav>
      <section>
        <IntroSection />
      </section>
      <section>
        <MiddleSection />
      </section>
    </>
  );
};

export default LandingPage;
