import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SECTIONS } from "../../constants/Section";
import NavItem from "../NavBar/NavItem";

const ContactSection = () => {
  const buttons = SECTIONS.filter((item) => item.as === "button");

  return (
    <div className="flex justify-center w-full h-full my-20 px-4">
      <div className="mt-28">
        {buttons.map((button) => (
          <NavItem key={button.type} {...button} size="tablet">
            <i className={button.icon} />
          </NavItem>
        ))}
      </div>
    </div>
  );
};

export default ContactSection;
