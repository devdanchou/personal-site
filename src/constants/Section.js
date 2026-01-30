export const SECTIONS = [
  { type: "work", label: "work", as: "link", to: "/work" },
  { type: "about", label: "about", as: "link", to: "/about" },
  {
    type: "linkedin",
    icon: "fa-brands fa-linkedin",
    ariaLabel: "LinkedIn",
    as: "button",
    onClick: () => window.open("https://www.linkedin.com/in/danielchou218", "_blank"),
  },
  {
    type: "email",
    icon: "fa-regular fa-envelope",
    ariaLabel: "Email",
    as: "button",
    onClick: () => window.location = "mailto:daniel.cw.chou@gmail.com",
  }
];
