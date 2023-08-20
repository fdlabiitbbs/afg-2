import React from "react";
import { Journals } from "@/constants";
import Navbar from "@/components/Navbar";

const page = () => {
  const reversedJournals = Journals.map(
    (journal, index, array) => array[array.length - 1 - index]
  );

  return (
    <div>
      <Navbar />
      <ol style={{ listStyle: "decimal" }}>
        {reversedJournals.map((journal) => {
          return (
            <li
              key={journal.ID}
              className="md:pl-4 ml-8 md:mx-20 md:py-4 p-2 rounded-lg hover:bg-slate-600"
            >
              <h1 className="text-xl">{journal.Title}</h1>
              <p>
                {journal.Authors.map((author, index) => {
                    return (
                        <span key={index} className="text-gray-400">
                            {author}
                            {index === journal.Authors.length - 1 ? "" : ", "}
                        </span>
                    );
                })}
              </p>
              <span className="text-gray-400">{journal.Journal} &nbsp;</span>
              <span className="text-gray-400">
                {journal.Volume_Issue_Year_Pages.map((volume, index) => {
                        return (
                            <span key={index} className="text-gray-400">
                                {volume}
                                {index === journal.Volume_Issue_Year_Pages.length - 1 ? "" : ", "}
                            </span>
                        );
                    })}
              </span>
              <div>
                <a href={journal.DOI} className="text-red-600">
                    DOI
                </a>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default page;
