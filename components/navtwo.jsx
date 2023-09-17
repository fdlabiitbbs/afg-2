"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "@/assets/afg_gif.gif";

function Navtwo() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-black">
        <div className="justify-between pr-4 mx-auto  lg:items-center lg:flex">
          <div>
            <div className="flex items-center justify-between lg:block">
              {/* LOGO */}
              <Link href="/">
                <Image
                  src={logo}
                  width={300}
                  height={300}
                  alt="logoAFG"
                  className="cursor-pointer text-xl w-[450px]"
                  priority={true}
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="lg:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
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
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
                navbar ? "p-4 lg:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen lg:h-auto items-center justify-center lg:flex ">

                <li className="mb-4">
                  <Link
                    href="/"
                    className="text-xl text-white py-2 px-6 text-center lg:hover:bg-slate-600"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Home
                  </Link>
                </li>

                <li className="mb-4">
                  <Link
                    href="/people"
                    className="text-xl text-white py-2 px-6 text-center lg:hover:bg-slate-600"
                    onClick={() => setNavbar(!navbar)}
                  >
                    People
                  </Link>
                </li>

                <li className="mb-4 lg:block hidden">
                  <div className="group relative cursor-pointer">
                    <div>
                      <a className="cursor-pointer text-xl menu-hover text-white py-2 px-6 text-center lg:hover:bg-slate-600">
                        Research
                      </a>
                    </div>
                    <div className="invisible absolute z-50 flex w-[200px] flex-col shadow-xl group-hover:visible rounded-lg bg-slate-700">
                      <Link
                        href="/research"
                        className="mt-1 py-1 px-4 mx-1 rounded-md hover:bg-slate-500 text-xl text-white"
                        onClick={() => setNavbar(!navbar)}
                      >
                        Research
                      </Link>

                      <Link
                        href="/research-facilities"
                        className="mb-1 py-1 px-4 mx-1 rounded-md hover:bg-slate-500 text-xl text-white"
                        onClick={() => setNavbar(!navbar)}
                      >
                        Facilities
                      </Link>
                    </div>
                  </div>
                </li>

                <li className="mb-4 lg:block hidden">
                  <div className="group relative cursor-pointer">
                    <div>
                      <a className="cursor-pointer text-xl menu-hover text-white py-2 px-6 text-center lg:hover:bg-slate-600">
                        Publications
                      </a>
                    </div>
                    <div className="invisible absolute z-50 flex w-[200px] flex-col shadow-xl group-hover:visible rounded-lg bg-slate-700">
                      <Link
                        href="/journals"
                        className="mt-1 py-1 px-4 mx-1 rounded-md hover:bg-slate-500 text-xl text-white"
                        onClick={() => setNavbar(!navbar)}
                      >
                        Journals
                      </Link>

                      <Link
                        href="/conferences"
                        className="mb-1 py-1 px-4 mx-1 rounded-md hover:bg-slate-500 text-xl text-white"
                        onClick={() => setNavbar(!navbar)}
                      >
                        Conferences
                      </Link>
                    </div>
                  </div>
                </li>

                {/* -----------------MOBILE NAVIGATION---------------- */}

                <li className="mb-4 lg:hidden block">
                  <Link
                    href="/research"
                    className="text-xl text-white py-2 px-6 text-center lg:hover:bg-slate-600"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Research
                  </Link>
                </li>

                <li className="mb-4 lg:hidden block">
                  <Link
                    href="/research-facilities"
                    className="text-xl text-white py-2 px-6 text-center lg:hover:bg-slate-600"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Research Facilities
                  </Link>
                </li>

                <li className="mb-4 lg:hidden block">
                  <Link
                    href="/journals"
                    className="text-xl text-white py-2 px-6 text-center lg:hover:bg-slate-600"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Journals
                  </Link>
                </li>

                <li className="mb-4 lg:hidden block">
                  <Link
                    href="/conferenceses"
                    className="text-xl text-white py-2 px-6 text-center lg:hover:bg-slate-600"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Conferences
                  </Link>
                </li>

                {/* -----------------ENDED HERE----------------- */}

                <li className="mb-4">
                  <Link
                    href="/projects"
                    className="text-xl text-white py-2 px-6 text-center lg:hover:bg-slate-600"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Projects
                  </Link>
                </li>

                <li className="mb-4">
                  <Link
                    href="/technologies-developed"
                    className="text-xl text-white py-2 px-6 text-center lg:hover:bg-slate-600"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Technologies Developed
                  </Link>
                </li>

                <li className="mb-4">
                  <Link
                    className="py-2 px-6 cursor-pointer text-xl text-white lg:hover:bg-slate-600 flex items-center"
                    href="https://scholar.google.co.in/citations?user=1N1daS8AAAAJ&hl=en"
                  >
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
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navtwo;
