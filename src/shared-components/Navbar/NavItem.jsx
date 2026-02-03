import { Link } from "react-router-dom";
import clsx from "clsx";

const TEXT_SIZE = {
  mobile: "text-4xl px-5",
  tablet: "text-xl px-5",
  desktop: "text-lg px-5",
  footer: "text-xl px-2",
};

const NavItem = ({ as, to, onClick, children, ariaLabel, size, isActive }) => {
  const className = clsx(
    "h-full mr-2 py-5 hover:text-slate-500",
    TEXT_SIZE[size],
    isActive && "underline underline-offset-4",
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
