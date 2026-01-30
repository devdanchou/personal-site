import { Link } from "react-router-dom";
import { SECTIONS } from "../../constants/Section";

const NavBar = () => {
  const NavItem = ({ as, to, onClick, children, ariaLabel }) => {
    const className = "text-lg h-full mr-2 py-5 px-7 hover:text-slate-500";
    if (as === "link") {
      return (
        <Link to={to} className={className} aria-label={ariaLabel}>
          {children}
        </Link>
      );
    }
    return (
      <button onClick={onClick} className={className} aria-label={ariaLabel}>
        {children}
      </button>
    );
  };

  return (
    <>
      <nav className="flex justify-center font-domine text-slate-700 text-2xl h-full">
        <div className="flex items-center justify-between w-full max-w-7xl">
          <div className="flex flex-1 justify-start py-5 px-5">
            <Link to="/" aria-label="Go to homepage">
              Logo
            </Link>
          </div>
          <div className="hidden sm:flex justify-end mx-4">
            {SECTIONS.map(({ type, label, icon, ...props }) => (
              <NavItem key={type} {...props}>
                {label && <span>{label}</span>}
                {icon && <i className={icon} />}
              </NavItem>
            ))}
          </div>
          <div className="flex flex-1 justify-end sm:hidden py-4 px-5">
            <button aria-label="open menu">
              <i className="fa-solid fa-bars text-3xl text-slate-700 font-medium hover:text-slate-500"></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
