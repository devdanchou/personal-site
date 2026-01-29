const SECTIONS = [
  { type: "work", label: "work" },
  { type: "about", label: "about" },
  { type: "email", icon: "fa-regular fa-envelope", ariaLabel: "Email" },
  {
    type: "linkedin",
    icon: "fa-brands fa-linkedin",
    ariaLabel: "Linkedin",
  },
];

const NavBar = () => {
  return (
    <>
      <nav className="flex justify-end font-domine text-slate-800 text-2xl h-full border-b border-slate-500">
        <div className="flex w-full max-w-7xl">
          <div className="flex flex-1 justify-start py-5">Logo</div>
          <div className="flex-1 justify-end">
            {SECTIONS.map(({ type, label, icon, ariaLabel }) => (
              <button
                key={type}
                className="ml-6 text-lg h-full py-5 hover:text-slate-500"
                aria-label={ariaLabel || label}
              >
                {label && <span>{label}</span>}
                {icon && <i className={icon}></i>}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
