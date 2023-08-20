import Image from "next/image";
import MainPagePic from "../assets/MainPagePic.png"

const HomePage = () => {
  return (
    <section className="body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            Welcome to &nbsp;
            <br className="hidden lg:inline-block" />
            Applied Fluids Group
          </h1>
          <p className="mb-8 leading-relaxed text-justify">
            Welcome to the home page of Applied Fluids Groups. Our research focuses on both fundamental and applied aspects of flow control for various applications, ranging from aerodynamics to microscale flows. Our group gives equal emphasis to translating fundamental laboratory studies into real applications. We use state-of-the-art experimental techniques and computational tools to understand the underlying physics. We are currently working on active and passive flow control techniques for applications like Aerodynamic drag reduction, Thermal Management, Micro Air Vehicles, Underwater propulsion, Industrial combustion, and Microchannel flows.
          </p>
          <div className="flex justify-center">

          </div>
        </div>
        <div className="lg:max-w-2xl lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src={MainPagePic}
            width={1000}
            height={1000}
            priority={true}
          />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
