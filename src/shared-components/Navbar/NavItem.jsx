import { Link } from "react-router-dom";
import clsx from "clsx";

const TEXT_SIZE = {
  mobile: "text-4xl",
  tablet: "text-xl",
  desktop: "text-lg",
};

const NavItem = ({ as, to, onClick, children, ariaLabel, size }) => {
  const className = clsx(
    "h-full mr-2 py-5 px-5 hover:text-slate-500",
    TEXT_SIZE[size],
  );

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

export default NavItem;
