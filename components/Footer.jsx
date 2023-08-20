import Image from "next/image";
import IIT_logo from "../assets/IIT_logo.svg";

const Footer = () => {
  return (
    <footer className="body-font">
      <div className="px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center">
          <Image
            src={IIT_logo}
            alt="IIT Bhubaneswar Logo"
            width={50}
            height={50}
            className="w-[70px] h-[70px] md:w-[200px] md:h-[200px]"
           />
          <span className="ml-3 text-sm">
            School of Mechanical Sciences
            <br />
            Indian Institute of Technology Bhubaneswar
          </span>
        </a>
        <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 — Applied Fluids Group
          <br />
        </p>
        <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
