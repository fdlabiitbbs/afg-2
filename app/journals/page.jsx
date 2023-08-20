import React from "react";
import { Journals } from "@/constants";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const page = () => {
  const reversedJournals = Journals.map(
    (journal, index, array) => array[array.length - 1 - index]
  );

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold lg:ml-20 md:ml-12 ml-8 mt-8">Journals</h1>

      <ol style={{ listStyle: "decimal" }}>
        {reversedJournals.map((journal) => {
          return (
            <li
              key={journal.ID}
              className="md:pl-4 ml-8 md:mx-20 md:py-4 p-2 rounded-lg"
            >
              <h1 className="text-xl">{journal.Title}</h1>
              <p>
                {journal.Authors.map((author, index) => {
                    return (
                        <span key={index} className="">
                            {author}
                            {index === journal.Authors.length - 1 ? "" : ", "}
                        </span>
                    );
                })}
              </p>
              <span className="">{journal.Journal} &nbsp;</span>
              <span className="">
                {journal.Volume_Issue_Year_Pages.map((volume, index) => {
                        return (
                            <span key={index} className="">
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
      <Footer />
    </div>
  );
};

export default page;
