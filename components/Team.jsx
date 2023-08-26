import Image from "next/image";
import profilePic from "@/assets/profilePic.jpg";
import { StudentNames } from "@/constants";

const Team = () => {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
            Research Scholars
          </h2>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {StudentNames.map((student, index) => {
            return (
              <div className="items-center rounded-lg shadow sm:flex border-2 border-gray-700">
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
      </div>
    </section>
  );
};

export default Team;
