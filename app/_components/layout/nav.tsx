"use client";
import { zenLoop } from "@/app/shared/fonts/font";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";

const Nav = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      setScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run it once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 w-screen  bg-[var(--filler2-color)] z-20 duration-200 transition-all ${
        scrolled ? "h-14 opacity-100" : "h-18 opacity-90"
      }`}
    >
      <div className="container w-full h-full flex items-center justify-between px-4">
        <figure className="flex items-center">
          <Image
            src="/icons/logo-white.svg"
            alt="logo"
            width={80}
            height={80}
            className=""
          />
        </figure>
        <ul className="flex justify-between items-center gap-9">
          <li
            className={`${zenLoop.className} capitalize text-xl text-[var(--primary-color)] hover:text-[var(--deep-color)] transition-all duration-500 relative under`}
          >
            <a href="#">home</a>
          </li>
          <li
            className={`${zenLoop.className} capitalize text-xl text-[var(--primary-color)] hover:text-[var(--deep-color)] transition-all duration-500 relative under`}
          >
            {" "}
            <a href="">bags</a>
          </li>
          <li
            className={`${zenLoop.className} capitalize text-xl text-[var(--primary-color)] hover:text-[var(--deep-color)] transition-all duration-500 relative under`}
          >
            {" "}
            <a href="">wallets</a>
          </li>
          <li
            className={`${zenLoop.className} capitalize text-xl text-[var(--primary-color)] hover:text-[var(--deep-color)] transition-all duration-500 relative under`}
          >
            {" "}
            <a href="">about</a>
          </li>
          <li
            className={`${zenLoop.className} capitalize text-xl text-[var(--primary-color)] hover:text-[var(--deep-color)] transition-all duration-500 relative under`}
          >
            {" "}
            <a href="">contact</a>
          </li>
          <li
            className={`${zenLoop.className} capitalize text-xl text-[var(--primary-color)] hover:text-[var(--deep-color)] transition-all duration-500`}
          >
            <button type="button" className="cursor-pointer" title="cart">
              <FontAwesomeIcon icon={faCartArrowDown} />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
