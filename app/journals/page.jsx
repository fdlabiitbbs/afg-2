import React from "react";
import { Journals } from "@/constants";

const page = () => {
  const reversedJournals = Journals.map(
    (journal, index, array) => array[array.length - 1 - index]
  );

  return (
    <div>
      <h1 className="text-3xl font-bold lg:ml-20 md:ml-12 ml-8 mt-8">
        Journals
      </h1>

      <ol style={{ listStyle: "decimal" }} reversed>
        {reversedJournals.map((journal) => {
          return (
            <li
              key={journal.ID}
              className="md:pl-4 ml-8 md:mx-20 md:py-2 p-2 rounded-lg"
            >
              <h1>
              {journal.Authors.map((author, index) => {
                  return (
                    <span key={index}>
                      {author}
                      {index === journal.Authors.length - 1 ? "" : ", "}
                    </span>
                  );
                })}.&nbsp;
                &ldquo;{journal.Title}.&ldquo; &nbsp;
                <span className="text-blue-700">{journal.Journal}</span>&nbsp;
                <span className="text-blue-500">{journal.impactFactor ? `(IF=${journal.impactFactor})`  : ""}</span>&nbsp;
                {journal.Volume_Issue_Year_Pages.map((volume, index) => {
                  return (
                    <span key={index} className="">
                      {volume}
                      {index === journal.Volume_Issue_Year_Pages.length - 1
                        ? ""
                        : ", "}
                    </span>
                  );
                })}&nbsp; 
                <span>
                  <a href={journal.DOI} className="text-red-600">
                    {journal.DOI ? "- DOI" : ""}
                  </a>
                </span>
              </h1>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default page;
