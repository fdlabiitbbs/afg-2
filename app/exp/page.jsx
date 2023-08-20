"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const page = () => {
  const [open, setOpen] = useState(false);

  const isOpen = () => {
    setOpen(!open);
  };
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true), [];
  });

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <div
        className="w-[58px] h-[58px] flex justify-between items-center cursor-pointer sticky top-0 backdrop-blur z-10"
        // onClick={isOpen}
        onClick={() => {
          isOpen();
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            data-name="Artboard 30"
            viewBox="0 0 64 64"
            id="moon"
          >
            <path
              fill="#ffd55d"
              d="M49.384,56.452A30.011,30.011,0,0,1,3.928,42.6,30.02,30.02,0,0,0,41.072,3.4,30.013,30.013,0,0,1,56.9,48.738Z"
            ></path>
            <polygon
              fill="#ffd55d"
              points="15 6.271 23.034 2 21.5 11.045 28 17.451 19.017 18.771 15 27 10.983 18.771 2 17.451 8.5 11.045 6.966 2 15 6.271"
            ></polygon>
            <path
              fill="#fff"
              d="M61.713,28.01A30.018,30.018,0,0,0,41.072,3.4,30.022,30.022,0,0,1,3.928,42.6c.132.35.29.687.435,1.031A39.8,39.8,0,0,0,26,50,39.988,39.988,0,0,0,61.713,28.01Z"
              opacity=".3"
            ></path>
            <path
              d="M46.144,58.442a29.874,29.874,0,0,0,3.24-1.99L56.9,48.738a30.225,30.225,0,0,0,1.548-2.6,1.993,1.993,0,0,0-3.241-.515L52.358,48.6l-4.013-.7a2.027,2.027,0,0,0-.345-.03,2,2,0,0,0-1.777,2.917L48.141,54.5l-1.918,3.718A1.984,1.984,0,0,0,46.144,58.442Z"
              opacity=".05"
            ></path>
            <polygon
              fill="#a381bd"
              points="50.391 54.5 48 49.865 53.065 50.75 56.652 47 57.391 52.182 62 54.5 57.391 56.818 56.652 62 53.065 58.25 48 59.135 50.391 54.5"
            ></polygon>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 47.5 47.5"
            id="sun"
          >
            <defs>
              <clipPath id="a">
                <path d="M0 38h38V0H0v38Z"></path>
              </clipPath>
            </defs>
            <g
              fill="#ffac33"
              clip-path="url(#a)"
              transform="matrix(1.25 0 0 -1.25 0 47.5)"
            >
              <path d="M17 35s0 2 2 2 2-2 2-2v-2s0-2-2-2-2 2-2 2v2zM35 21s2 0 2-2-2-2-2-2h-2s-2 0-2 2 2 2 2 2h2zM5 21s2 0 2-2-2-2-2-2H3s-2 0-2 2 2 2 2 2h2zM10.121 29.706s1.414-1.414 0-2.828-2.828 0-2.828 0l-1.415 1.414s-1.414 1.414 0 2.829c1.415 1.414 2.829 0 2.829 0l1.414-1.415ZM31.121 8.707s1.414-1.414 0-2.828-2.828 0-2.828 0l-1.414 1.414s-1.414 1.414 0 2.828 2.828 0 2.828 0l1.414-1.414ZM30.708 26.879s-1.414-1.414-2.828 0 0 2.828 0 2.828l1.414 1.414s1.414 1.414 2.828 0 0-2.828 0-2.828l-1.414-1.414ZM9.708 5.879s-1.414-1.414-2.828 0 0 2.828 0 2.828l1.414 1.414s1.414 1.414 2.828 0 0-2.828 0-2.828L9.708 5.879ZM17 5s0 2 2 2 2-2 2-2V3s0-2-2-2-2 2-2 2v2zM29 19c0 5.523-4.478 10-10 10-5.523 0-10-4.477-10-10 0-5.522 4.477-10 10-10 5.522 0 10 4.478 10 10"></path>
            </g>
          </svg>
        )}
      </div>
    </div>
  );
};

export default page;
