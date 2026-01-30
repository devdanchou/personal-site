import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { SECTIONS } from "../constants/Section";
import NavItem from "../shared-components/Navbar/NavItem";

const MobileMenuModal = () => {
  const links = SECTIONS.filter((item) => item.as === "link");
  const buttons = SECTIONS.filter((item) => item.as === "button");

  return (
    <motion.div
      className="bg-white fixed left-0 text-slate-700 flex flex-col items-start pt-12 text-lg pb-6 rounded-bl-sm shadow-md h-full w-full font-domine"
      initial={{ translateX: "-100%" }}
      animate={{ translateX: 0 }}
      exit={{ translateX: "-100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex flex-col justify-center w-full h-full">
        <div className="flex flex-col items-center mt-20">
          {links.map((link) => (
            <NavItem key={link.type} {...link} size="mobile">
              <span>{link.label}</span>
            </NavItem>
          ))}
        </div>
      </div>
      <div className="flex w-full justify-center mt-20">
        {buttons.map((button) => (
          <NavItem key={button.type} {...button} size="tablet">
            <i className={button.icon} />
          </NavItem>
        ))}
      </div>
    </motion.div>
  );
};

export default MobileMenuModal;
