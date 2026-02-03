import NavBar from "../shared-components/NavBar";
import AboutSection from "../components/AboutSection";
import FooterSection from "../shared-components/FooterSection";

const AboutPage = () => {
  return (
    <>
      <NavBar />
      <section>
        <AboutSection />
      </section>
      <footer>
        <FooterSection />
      </footer>
    </>
  );
};

export default AboutPage;
