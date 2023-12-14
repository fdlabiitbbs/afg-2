import { ResearchContent } from "@/constants";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="container mx-auto px-5 py-12 items-center">
        <h1 className="title-font md:text-4xl text-3xl mb-4 font-medium">
          Thermal management
        </h1>
        <p className="leading-relaxed">
          Thermal management is a critical aspect in various engineering
          applications, including electronics, automotive systems, industrial
          processes, and more. Efficient heat dissipation is essential to ensure
          optimal performance, reliability, and longevity of components. Flow
          control devices play a pivotal role in thermal management systems,
          regulating the flow of coolant or air to control temperatures
          effectively.
        </p>
        <p className="leading-relaxed">
          We are developing novel flow control devices for thermal management,
          these include, Co-axial synthetic jets, synthetic jet array for
          steering & focusing, and flexible flaps. These devices can be tailored
          to make them suitable for near-field and far-field cooling
          applications, along with spot cooling features.
        </p>
      </div>
      <div className="">
        {ResearchContent.map((research, index) => {
          return (
            <section className="body-font" key={research.id}>
              <div className="container mx-auto flex px-5 py-8 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full md:mb-0 mb-10 flex items-center justify-center">
                  <Image
                    className="w-full border-2"
                    alt="hero"
                    src={research.image}
                    width={1000}
                    height={1000}
                  />
                </div>
                <div
                  className="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
                  key={research.id}
                >
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                    {research.title}
                  </h1>
                  <div className="mb-3 leading-relaxed text-justify">
                    {research.content.map((content, index) => {
                      return (
                        <p className="mb-1" key={content}>
                          {content}
                        </p>
                      );
                    })}
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
