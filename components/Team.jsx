import React from "react";
import { StudentNames } from "@/constants";

const Team = () => {
  const students = StudentNames.names;
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
        {students.map((name) => {
          return (
            <div>
              <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                <img
                  className="absolute object-cover w-full h-full rounded"
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                  alt="Person"
                />
              </div>
              <div className="flex flex-col sm:text-center">
                <p className="text-lg font-bold">{name}</p>
                <p className="mb-5 text-xs text-gray-800">Product Manager</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
