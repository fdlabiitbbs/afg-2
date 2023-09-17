import Image from "next/image";
import { TechnologiesDeveloped } from "@/constants";
import Footer from "@/components/Footer";


const page = () => {
  return (
    <>
      <div className="">
        {TechnologiesDeveloped.map((tech, index) => {
          return (
            <section className="body-font" key={tech.id}>
              <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
                  <Image
                    className="object-cover object-center rounded"
                    alt="hero"
                    src={tech.img}
                    width={1000}
                    height={1000}
                  />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center" key={tech.id}>
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                    {tech.title}
                  </h1>
                  <p className="mb-3 leading-relaxed">Indian Patent No - {tech.patentNo}</p>
                  <p className="mb-3 leading-relaxed text-justify">
                    Background: {tech.background}
                  </p>
                  <p className="mb-3 leading-relaxed text-justify">
                    Novelty and Claim: {tech.novelty}
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
