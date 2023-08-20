import Navbar from "@/components/Navbar";
import { Conferences } from "@/constants";

const page = () => {
  return (
    <div>
      <Navbar />
      <section>
        <h1 className="text-3xl font-bold lg:ml-20 md:ml-12 ml-8 mt-8">Conferences</h1>
        <br />
        <div className="lg:ml-20 md:ml-12 ml-8">
          <ol style={{ listStyle: "decimal" }}>
            {Conferences.map((conference, index) => {
              return (
                <li className="my-6 pl-4">
                  <div className="md:flex text-gray-300">
                    <div className="flex">
                        <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            fill="#db5669" // You can change the fill color here
                            className="w-6 h-6 mr-2"
                        >
                            <path d="M1 6h40v8H1z" fill="#f26674" />
                            <path d="M41 6v6H9a6 6 0 0 1-6-6z" />
                            <path d="M1 14h40v30H1z" fill="#dad7e5" />
                            <path d="M41 14v28H7a4 4 0 0 1-4-4V14" fill="#edebf2" />
                            <path
                            d="M8 8V4a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0zM12 8V4a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0zM32 8V4a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0zM28 8V4a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0z"
                            fill="#c6c3d8"
                            />
                            <path d="M7 19h6v4H7z" fill="#dad7e5" />
                            <path d="M18 19h6v4h-6z" fill="#dad7e5" />
                            <path d="M29 19h6v4h-6z" fill="#dad7e5" />
                            <path d="M7 27h6v4H7z" fill="#c6c3d8" />
                            <path d="M18 27h6v4h-6z" fill="#c6c3d8" />
                            <path d="M29 27h6v4h-6z" fill="#c6c3d8" />
                            <path d="M7 35h6v4H7z" fill="#dad7e5" />
                            <path d="M13 35v2h-2a2 2 0 0 1-2-2z" fill="#c6c3d8" />
                            <path d="M18 35h6v4h-6z" fill="#f26674" />
                            <path d="M29 35h6v4h-6z" fill="#f26674" />
                            <path
                            d="M47 40h-3l-3 4V6c6.72 38.05 5.32 30.1 6 34"
                            fill="#dad7e5"
                            />
                            <path
                            d="M46.65 38H44l-1 1.33v-22L46.65 38"
                            fill="#f26674"
                            />
                        </svg>
                        </div>
                        <div className="flex items-center">
                        <p>{conference.date}&nbsp;  |  &nbsp;  </p>
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2" viewBox="0 0 64 64" id="Location"><path fill="#4285f4" d="M54.01 58.74C54.01 61.65 44.15 64 32 64c-12.15 0-22.01-2.35-22.01-5.26 0-2.6 7.9-4.74 18.26-5.18h7.5c10.37.44 18.26 2.58 18.26 5.18z" className="colore3e2e1 svgShape"></path><path fill="#ea4335" d="M32 0C20.7 0 11.54 9.15 11.54 20.45 11.54 31.75 32 58.74 32 58.74s20.45-26.99 20.45-38.29S43.3 0 32 0zm0 33.99c-7.48 0-13.54-6.06-13.54-13.54S24.52 6.91 32 6.91c7.48 0 13.54 6.06 13.54 13.54S39.48 33.99 32 33.99z" className="colore82327 svgShape"></path></svg>
                        </div>
                        <div className="flex items-center">
                        <p>{conference.place}</p>
                        </div>
                    </div>
                  </div>
                  <p className="text-xl">{conference.conferenceName}</p>
                  <p className="text-gray-400">{conference.info}</p>
                  <p className="text-gray-400">{conference.attendees}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </div>
  );
};

export default page;
