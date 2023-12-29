"use client";
import Image from "next/image";
import { StudentNames } from "@/constants";
import { AlumniNames } from "@/constants";

const Team = () => {
  return (
    <section>
      {/* <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl font-extrabold">
            Research Scholars
          </h2>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {StudentNames.map((student, index) => {
            return (
              <div className="items-center rounded-lg shadow sm:flex border-2 border-gray-700" key={student.id}>
                <div className="w-full">
                  <Image
                    className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                    src={student.image}
                    alt="Bonnie Avatar"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold tracking-tight">
                    {student.name}
                  </h3>
                  <span>
                    {student.degree}
                  </span>
                  <p className="mt-3 mb-4 font-light">
                    {student.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}

      {/* <section className="text-gray-400body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 ">
              REASEARCH SCHOLARS
            </h1>
      
          </div>

          <div className="flex flex-wrap -m-4">
            {StudentNames.map((student, index) => {
              return (
                <div className="p-4 lg:w-1/4 md:w-1/2" key={student.id}>
                  <div className="h-full flex flex-col items-center text-center">
                    <Image
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full  object-cover object-center mb-4"
                      src={student.image}
                    />
                    <div className="w-full">
                      <h2 className="title-font font-medium text-lg">
                        {student.name}
                      </h2>
                      <h3 className="text-gray-500 mb-3">{student.degree}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}


{/* ----------------------------rESEARCH sCHOLARS----------------------------- */}
      <h1 className="mb-4 pt-12 text-3xl font-bold text-center">Research Scholars</h1>
      {StudentNames.map((student, index) => {
        return (
          <div className="body-font border-2 border-black lg:mx-24 mx-2 my-4" key={student.id}>
            <div className="container mx-auto flex px-2 py-2 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-[150px] md:w-1/2 w-5/6 md:mb-0 mb-10">
                <Image
                  className="object-cover object-center rounded border-2"
                  alt="hero"
                  src={student.image}
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font text-3xl font-medium">
                  {student.name}
                </h1>
                <p className="leading-relaxed text-xl mb-2">
                  {student.degree}
                </p>
                <p className="mb-4 leading-relaxed text-left">
                  {student.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}


{/* ----------------------------ALUMNI----------------------------- */}
      <h1 className="mb-4 pt-12 text-3xl font-bold text-center">Alumni</h1>
      {AlumniNames.map((alumni, index) => {
        return (
          <div className="body-font border-2 border-black lg:mx-24 mx-2 my-4" key={alumni.id}>
            <div className="container mx-auto flex px-2 py-2 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-[150px] md:w-1/2 w-5/6 md:mb-0 mb-10">
                <Image
                  className="object-cover object-center rounded border-2"
                  alt="hero"
                  src={alumni.image}
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-8 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font text-3xl font-medium">
                  {alumni.name}
                </h1>
                <p className="leading-relaxed text-xl mb-2">
                  {alumni.degree}
                </p>
                <p className="mb-4 leading-relaxed text-left">
                  {alumni.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Team;
