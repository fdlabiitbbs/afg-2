"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/afg_gif.gif";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  

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
            <li className="hover:bg-slate-600">
              <div className="mx-auto flex items-center justify-center ">
                <div className="group relative cursor-pointer">
                  <div className="flex items-center justify-between px-4">
                    <a className="py-2 cursor-pointer text-xl flex items-center menu-hover">Research</a>
                   
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
        

           
    </div>
  );
};

export default Navbar;







