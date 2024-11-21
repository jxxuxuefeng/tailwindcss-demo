// 第三方
import React from "react";
import Logo from "../../assets/Logo.png";

// 自定义
const navLinks = [
  {
    id: 1,
    title: "About",
    link: "#",
  },
  {
    id: 2,
    title: "Services",
    link: "#",
  },
  {
    id: 3,
    title: "Project",
    link: "#",
  },
  {
    id: 4,
    title: "Contact",
    link: "#",
  },
];
const Navbar = () => {
  return (
    <>
      <div className="container py-4 flex justify-between items-center">
        {/*logo section*/}
        <div className="flex items-center gap-3">
          <img src={Logo} alt="logo" className="w-16" />
          <span className="text-2xl font-bold">Interior</span>
        </div>
        {/*link section*/}
        <div className="hidden lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.link}
              className="mx-4 text-sm font-semibold"
            >
              {link.title}
            </a>
          ))}
        </div>
        {/*button section*/}
        <div className="">
          <button className="primary-btn">Try For Free</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
