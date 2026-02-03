import { motion } from "framer-motion";
import ContactSection from "../FooterSection/ContactSection";

const FooterSection = () => {
  return (
    <div className="flex justify-center h-full">
      <div className="flex items-center justify-between w-full max-w-full lg:max-w-[1400px] xl:max-w-[1600px] mt-10">
        <ContactSection />
      </div>
    </div>
  );
};

export default FooterSection;
