import React from "react";
import { ResearchFacilities } from "@/constants";
import Image from "next/image";
import profilePic from "@/assets/profilePic.jpg";

const page = () => {
  return (
    <>
      <div className="">
        {ResearchFacilities.map((research) => {
          return (
            <section className="body-font" key={research.id}>
              <div className="container mx-auto flex px-5 py-2 md:flex-row flex-col items-center">
                <div className="md:mb-0 mb-10 lg:w-[30%]">
                  <Image
                    className="rounded h-full"
                    alt="hero"
                    src={profilePic}
                    width={150}
                  />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                    {research.title}
                  </h1>
                  <p className="mb-3 leading-relaxed text-justify">
                    {research.content}
                  </p>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </>

  );
};

export default page;
