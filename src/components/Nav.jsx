import React, { useState } from "react";
import logo from "../assets/logo2.png";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const Nav = () => {
  const [color, setColor] = useState(false);
  const scrool = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", scrool);
  return (
    <header
      className={
        color
          ? "bg-[#f2f2f2] sticky left-0 top-0 py-3  transition-all duration-700  border-b-orange-400 border-2 z-40"
          : "  border-2 z-40 py-6 transition-all duration-700"
      }
    >
      <div className="flex items-center duration-500 justify-between w-[90%] mx-auto  ">
        <img src={logo} alt="" className="w-36 duration-500 transition-all" />
        <nav className="flex gap-6 items-center relative transition-all duration-500">
          <a className="duration-500" href="hh">
            Menu
          </a>
          <a className="duration-500" href="hh">
            Blogs
          </a>

          <a className="duration-500" href="hh">
            Login
          </a>
          <span>
            <MdOutlineAddShoppingCart className="text-2xl duration-500 cursor-pointer" />
          </span>

          <a
            href="hh"
            className="border px-6 py-1 text-center hover:ring-2 duration-500"
          >
            Sign Up
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
