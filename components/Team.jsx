'use client'
import Image from "next/image";
import { StudentNames } from "@/constants";

const Team = () => {
  return (
    <section>
      {/* <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
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

      <section class="text-gray-400body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-2xl font-medium title-font mb-4 ">
              REASEARCH SCHOLARS
            </h1>
      
          </div>

          <div class="flex flex-wrap -m-4">
            {StudentNames.map((student, index) => {
              return (
                <div class="p-4 lg:w-1/4 md:w-1/2" key={student.id}>
                  <div class="h-full flex flex-col items-center text-center">
                    <Image
                      alt="team"
                      class="flex-shrink-0 rounded-lg w-full  object-cover object-center mb-4"
                      src={student.image}
                    />
                    <div class="w-full">
                      <h2 class="title-font font-medium text-lg">
                        {student.name}
                      </h2>
                      <h3 class="text-gray-500 mb-3">{student.degree}</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Team;
