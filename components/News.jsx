import { NewsFeed } from "@/constants";

const News = () => {
  return (
    <div>
      <table className="mx-4 my-8 border-2">
        <thead className="border-b-[1px]">
          <tr>
            <th className="text-3xl font-bold py-4 ">Latest News</th>
          </tr>
        </thead>
        <tbody>
          {NewsFeed.map((news, index) => (
            <tr key={news.id} className="flex flex-col text-xl border-b-[1px] py-4">
              <td className="font-semibold">{news.title}</td>
              <td className="text-gray-500">{news.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default News;