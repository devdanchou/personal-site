import { useState } from "react";
import { Link } from "react-router-dom";
import { SECTIONS } from "../../constants/Section";
import NavItem from "./NavItem";
import ModalWrapper from "../../components/ModalWrapper";
import { AnimatePresence } from "framer-motion";
import MobileMenuModal from "../../components/MobileMenuModal";
import logoImg from "../../assets/logo.png";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-center font-domine text-slate-700 text-2xl h-full">
        <div className="flex items-center justify-between w-full max-w-7xl">
          <div className="flex flex-1 justify-start py-5 px-5">
            <Link to="/" aria-label="Go to homepage">
              <img className="h-16" src={logoImg} />
            </Link>
          </div>
          <div className="hidden sm:flex justify-end mx-4">
            {SECTIONS.map(({ type, label, icon, ...props }) => (
              <NavItem key={type} {...props} size="desktop">
                {label && <span>{label}</span>}
                {icon && <i className={icon} />}
              </NavItem>
            ))}
          </div>
          <div className="flex flex-1 justify-end sm:hidden py-4 px-5">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="open menu"
            >
              <i className="fa-solid fa-bars text-3xl font-medium hover:text-slate-500"></i>
            </button>
          </div>
        </div>
        <div className="sm:hidden">
          <AnimatePresence>
            <ModalWrapper
              isOpen={mobileMenuOpen}
              onCloseClick={() => setMobileMenuOpen(false)}
            >
              <MobileMenuModal />
            </ModalWrapper>
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
