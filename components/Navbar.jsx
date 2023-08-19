"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, delay } from "framer-motion";
import Link from "next/link";

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
    <div className="sticky top-0 backdrop-blur z-10">
      {/* DESKTOP NAVIGATION BAR */}
      <nav className="justify-between hidden md:flex">
        <div className="ml-2">
          <span className="cursor-pointer">
            {/* <Image src={febslogo} alt="navbar" width={50} height={50} /> */}
            <h1 className="py-2 px-5 cursor-pointer text-xl">AFG</h1>
          </span>
        </div>
        <div className="flex items-center">
          <ul className="flex">
            <li className="py-2 px-5 cursor-pointer text-xl hover:bg-slate-600">
              <Link href="./">Home</Link>
            </li>
            <li className="py-2 px-5 cursor-pointer text-xl hover:bg-slate-600">
              <Link href="/people">People</Link>
            </li>
            <li className="py-2 cursor-pointer text-xl hover:bg-slate-600">
              
                <div class="mx-auto flex items-center justify-center ">
                  <div class="group relative cursor-pointer">
                    <div class="flex items-center justify-between px-4">
                      <a
                        class="menu-hover"
                        onClick=""
                      >
                        Research
                      </a>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </div>
                    <div
                      class="invisible absolute z-50 flex w-[200px] flex-col shadow-xl group-hover:visible rounded-lg bg-slate-700"
                      
                    >
                      <Link href="/research" class="mt-1 py-1 px-4 mx-1 rounded-md hover:bg-slate-500">
                        Research
                      </Link>

                      <Link href="/research-facilities" class="mb-1 py-1 px-4 mx-1 rounded-md hover:bg-slate-500">
                        Facilities
                      </Link>
                    </div>
                  </div>
                </div>
              
            </li>
            <li className="py-2 cursor-pointer text-xl hover:bg-slate-600">
              
                <div class="mx-auto flex items-center justify-center ">
                  <div class="group relative cursor-pointer">
                    <div class="flex items-center justify-between px-4">
                      <a
                        class="menu-hover"
                        onClick=""
                      >
                        Publication
                      </a>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="h-6 w-6"
                        >
                          <path
                            stroke-linecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </div>
                    <div
                      class="invisible absolute z-50 flex w-[200px] flex-col shadow-xl group-hover:visible rounded-lg bg-slate-600"
                      
                    >
                      <a class="mt-1 py-1 px-4 mx-1 rounded-md hover:bg-slate-500">
                        Journals
                      </a>

                      <a class="mb-1 py-1 px-4 mx-1 rounded-md hover:bg-slate-500">
                        Conferences
                      </a>
                    </div>
                  </div>
                </div>
              
            </li>
            <li className="py-2 px-5 cursor-pointer text-xl hover:bg-slate-600">
              <a>Project</a>
            </li>
            <li className="py-2 px-5 cursor-pointer text-xl hover:bg-slate-600">
              <Link href="/technologies-developed">Technologies Developed</Link>
            </li>
            <li className="py-2 px-5 cursor-pointer text-xl text-white hover:bg-slate-600">
              <a>
                <svg
                  className="text-white text-xl bi bi-google"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="29"
                  fill="currentColor"
                  class=""
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* MOBILE NAVIGATION BAR */}
      <nav className="m-0 p-0 box-border flex flex-col md:hidden">
        <div className="flex justify-between">
          <div className="w-[58px] h-[58px]">
            {/* <Image src={febslogo} alt="navbar" width={50} height={50} /> */}
            <h1>AFG</h1>
          </div>

          <div
            className="w-[58px] h-[58px] flex justify-between items-center cursor-pointer"
            onClick={isOpen}
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
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
                stroke="currentColor"
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
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              variants={item}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "100vh", opacity: 1 }}
              exit="exit"
            >
              <div className=" w-[100%] h-[100%] relative flex justify-center items-center flex-col bg-gray-900">
                <a
                  href="#home"
                  className="inline-flex h-[50px] overflow-hidden text-[18px] uppercase"
                  onClick={isOpen}
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="inline-flex h-[50px] overflow-hidden text-[18px] uppercase"
                  onClick={isOpen}
                >
                  People
                </a>
                <a
                  href="#events"
                  className="inline-flex h-[50px] overflow-hidden text-[18px] uppercase"
                  onClick={isOpen}
                >
                  Research
                </a>
                <a
                  href="#posts"
                  className="inline-flex h-[50px] overflow-hidden text-[18px] uppercase"
                  onClick={isOpen}
                >
                  Publication
                </a>
                <a
                  href="#team"
                  className="inline-flex h-[50px] overflow-hidden text-[18px] uppercase"
                  onClick={isOpen}
                >
                  Project
                </a>
                <a
                  href="#contacts"
                  className="inline-flex h-[50px] overflow-hidden text-[18px] uppercase"
                  onClick={isOpen}
                >
                  Technologies Developed
                </a>
                <a
                  href="#contacts"
                  className="inline-flex h-[50px] overflow-hidden text-[18px] uppercase"
                  onClick={isOpen}
                >
                  <svg
                    className="text-white text-xl bi bi-google"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="29"
                    fill="currentColor"
                    class=""
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
                      fill="white"
                    ></path>
                  </svg>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
