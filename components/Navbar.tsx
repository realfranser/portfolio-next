import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

import navbarDataJSON from "../locales/es-ES/navbar.json";

interface INavbarData {
  home: string;
  about: string;
  blog: string;
  video: string;
  resume: string;
  contact: string;
  mobileTitle: string;
  mobileContactPhrase: string;
}

const navbarData: INavbarData = navbarDataJSON;

export const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/blog/fullstack-toolbox" ||
      router.asPath === "/blog/google-cloud" ||
      router.asPath === "/blog/portfolio" ||
      router.asPath === "/blog/online-affiliates"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src="/assets/realfranserLogo.png"
            alt="/"
            width="115"
            height="37"
            className="cursor-pointer"
          />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                {navbarData.home}
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">
                {navbarData.about}
              </li>
            </Link>
            <Link href="/video">
              <li className="ml-10 text-sm uppercase hover:border-b">
                {navbarData.video}
              </li>
            </Link>
            <Link href="/blog">
              <li className="ml-10 text-sm uppercase hover:border-b">
                {navbarData.blog}
              </li>
            </Link>
            <Link href="/resume">
              <li className="ml-10 text-sm uppercase hover:border-b">
                {navbarData.resume}
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                {navbarData.contact}
              </li>
            </Link>
          </ul>
          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  src="/../public/assets/realfranserLogo.png"
                  width="93"
                  height="30"
                  alt="/"
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                {navbarData.mobileTitle}
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {navbarData.home}
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {navbarData.about}
                </li>
              </Link>
              <Link href="/blog">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {navbarData.blog}
                </li>
              </Link>
              <Link href="/video">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {navbarData.video}
                </li>
              </Link>
              <Link href="/resume">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {navbarData.resume}
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {navbarData.contact}
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                {navbarData.mobileContactPhrase}
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/fran-serrano/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/realfranser"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="/resume">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
