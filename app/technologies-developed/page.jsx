import Image from "next/image";
import { TechnologiesDeveloped } from "@/constants";

const page = () => {
  return (
    <>
      <div className="container mx-auto px-5 py-12 items-center text-justify">
        <h1 className="title-font md:text-4xl text-3xl mb-4 font-medium">Technologies Developed</h1>
        <p className="leading-relaxed">
          On this page, you will find a comprehensive collection of our research
          group&#39;s technologies, Each technology is accompanied by a brief
          description of its features, benefits, and potential applications.
        </p>
        <p className="leading-relaxed">
          Our goal is to bring our research from the lab to the real world, and
          we believe that by sharing our technologies with the broader
          community, we can make a positive impact on society. We invite you to
          explore our technologies and learn how they can contribute to your
          research, industry, or daily life.
        </p>
        <p className="leading-relaxed">
          For licensing and commercialization, interested firms can contact the
          principal investigator <a href="mailto:venugopal@iitbbs.ac.in" className="text-blue-500">venugopal@iitbbs.ac.in</a> 
        </p>
      </div>
      <div>
        {TechnologiesDeveloped.map((tech, index) => {
          return (
            <section className="body-font" key={tech.id}>
              <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
                  <Image
                    className="object-cover object-center rounded"
                    alt="hero"
                    src={tech.img}
                    width={1000}
                    height={1000}
                  />
                </div>
                <div
                  className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
                  key={tech.id}
                >
                  <h1 className="title-font text-3xl mb-4 font-medium">
                    {tech.title}
                  </h1>
                  <p className="mb-3 leading-relaxed">
                    Indian Patent No - {tech.patentNo}
                  </p>
                  <p className="mb-3 leading-relaxed text-justify">
                    <span className="font-semibold">Background:</span>{" "}
                    {tech.background}
                  </p>
                  <div className="mb-3 leading-relaxed text-justify">
                    <span className="font-semibold">Novelty and Claim:</span>{" "}
                    {tech.novelty}
                  </div>
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
