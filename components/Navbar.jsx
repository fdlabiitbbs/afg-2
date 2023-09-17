"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, delay } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/afg_gif.gif";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const isOpen = () => {
    setOpen(!open);
  };

  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };

  const [navItem, setNavItem] = useState("hidden");
  const handleclick = () => {
    if (navItem === "hidden") {
      setNavItem("text-left mr-2");
    } else {
      setNavItem("hidden");
    }
  };

  return (
    <div className="top-0 backdrop-blur z-10">
      {/* DESKTOP NAVIGATION BAR */}
      <nav className="justify-between hidden md:flex bg-black text-white">
        <div>
          <span className="cursor-pointer">
            {/* <Image src={febslogo} alt="navbar" width={50} height={50} /> */}
            <Image
              src={logo}
              width={300}
              height={300}
              alt="logoAFG"
              className="cursor-pointer text-xl w-[450px]"
            />
          </span>
        </div>
        <div className="flex items-center">
          <ul className="flex">
            <li>
              <Link className="py-2 px-5 cursor-pointer text-xl hover:bg-slate-600 flex items-center" href="./">Home</Link>
            </li>
            <li>
              <Link className="py-2 px-5 cursor-pointer text-xl hover:bg-slate-600 flex items-center" href="/people">People</Link>
            </li>
            <li className=" hover:bg-slate-600">
              <div className="mx-auto flex items-center justify-center ">
                <div className="group relative cursor-pointer">
                  <div className="flex items-center justify-between px-4">
                    <a className="py-2 cursor-pointer text-xl flex items-center menu-hover">Research</a>
                    {/* <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span> */}
                  </div>
                  <div className="invisible absolute z-50 flex w-[200px] flex-col shadow-xl group-hover:visible rounded-lg bg-slate-700">
                    <Link
                      href="/research"
                      className="mt-1 py-1 px-4 mx-1 rounded-md hover:bg-slate-500 text-xl"
                    >
                      Research
                    </Link>

                    <Link
                      href="/research-facilities"
                      className="mb-1 py-1 px-4 mx-1 rounded-md hover:bg-slate-500 text-xl"
                    >
                      Facilities
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li className=" hover:bg-slate-600">
              <div className="mx-auto flex items-center justify-center ">
                <div className="group relative cursor-pointer">
                  <div className="flex items-center justify-between px-4">
                    <a className="py-2 cursor-pointer text-xl flex items-center menu-hover">Publication</a>
                    {/* <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span> */}
                  </div>
                  <div className="invisible absolute z-50 flex w-[200px] flex-col shadow-xl group-hover:visible rounded-lg bg-slate-700">
                    <Link
                      href="/journals"
                      className="mt-1 py-1 px-4 mx-1 rounded-md hover:bg-slate-500 text-xl"
                    >
                      Journals
                    </Link>

                    <Link
                      href="/conferences"
                      className="mb-1 py-1 px-4 mx-1 rounded-md hover:bg-slate-500 text-xl"
                    >
                      Conferences
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link className="py-2 px-5 cursor-pointer text-xl hover:bg-slate-600 flex items-center" href="/projects">Project</Link>
            </li>
            <li>
              <Link className="py-2 px-5 cursor-pointer text-xl hover:bg-slate-600 flex items-center" href="/technologies-developed">Technologies Developed</Link>
            </li>
            <li>
              <a className="py-2 px-5 cursor-pointer text-xl text-white hover:bg-slate-600 flex items-center" href="https://scholar.google.co.in/citations?user=1N1daS8AAAAJ&hl=en">
                <svg
                  className="text-xl bi bi-google w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="29"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </li>
            <li className="px-5 -mt-2 cursor-pointer text-xl flex items-center">
              <ThemeSwitcher />
            </li>
          </ul>
        </div>
      </nav>





      {/* MOBILE NAVIGATION BAR */}
      <nav className="m-0 p-0 box-border flex flex-col md:hidden">
        <div className="flex justify-between bg-black">
          <div className="">
            {/* <Image src={febslogo} alt="navbar" width={50} height={50} /> */}
            <Image
              src={logo}
              width={500}
              height={500}
              alt="logoAFG"
              className="cursor-pointer text-xl h-[150px] w-[250px]"
            />
          </div>

          <div>
            
            <div
              className="w-[58px] h-[58px] flex justify-between items-center cursor-pointer sticky top-0 backdrop-blur z-10"
              onClick={isOpen}
            >
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="w-10 h-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </div>
            <ThemeSwitcher />
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              variants={item}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100vh", opacity: 1 }}
              exit="exit"
            >
              <div className=" w-full h-[100%] relative flex items-center flex-col mt-8">
                <Link
                  href="/"
                  className="inline-flex h-[50px] overflow-hidden text-[18px] uppercase"
                  onClick={isOpen}
                >
                  Home
                </Link>
                <Link
                  href="/people"
                  className="inline-flex h-[50px] overflow-hidden text-[18px] uppercase"
                  onClick={isOpen}
                >
                  People
                </Link>        
                <Link
                  href="/journals"
                  className="inline-flex h-[50px] overflow-hidden text-[18px] uppercase"
                  onClick={isOpen}
                >
                  Journals
                </Link>
                <Link
                  href="/conferences"
                  className="inline-flex h-[50px] overflow-hidden text-[18px] uppercase"
                  onClick={isOpen}
                >
                  Conferences
                </Link>
                <Link
                  href="/research"
                  className="inline-flex h-[50px] overflow-hidden text-[18px] uppercase"
                  onClick={isOpen}
                >
                  Research
                </Link>
                <Link
                  href="/research-facilities"
                  className="inline-flex h-[50px] overflow-hidden text-[18px] uppercase"
                  onClick={isOpen}
                >
                  Research Facilities
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex h-[50px] overflow-hidden text-[18px] uppercase"
                  onClick={isOpen}
                >
                  Project
                </Link>
                <Link
                  href="/technologies-developed"
                  className="inline-flex h-[50px] overflow-hidden text-[18px] uppercase"
                  onClick={isOpen}
                >
                  Technologies Developed
                </Link>
                <Link
                  href="https://scholar.google.co.in/citations?user=1N1daS8AAAAJ&hl=en"
                  className="inline-flex h-[50px] overflow-hidden text-[18px] uppercase"
                  onClick={isOpen}
                >
                  <svg
                    className="text-xl bi bi-google"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="29"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
                    ></path>
                  </svg>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
