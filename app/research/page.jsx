import React from "react";
import { ResearchContent } from "@/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="text-white">
        {ResearchContent.map((research, index) => {
          return (
            <section className="text-gray-400 bg-gray-900 body-font">
              <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
                  <img
                    className="object-cover object-center rounded"
                    alt="hero"
                    src="https://dummyimage.com/720x600"
                  />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center" key={research.id}>
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                    {research.title}
                  </h1>
                  <div className="mb-3 leading-relaxed text-justify">
                    {research.content.map((content, index) => {
                      return (
                        <p className="mb-1">{content}</p>
                      )
                    })}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
      <Footer />
    </>

  );
};

export default page;