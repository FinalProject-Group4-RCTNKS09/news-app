import { useEffect } from "react";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "../redux/actions/newsActions";

function ApiItems() {
  const news = useSelector((state) => state.berita.currentNews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews("covid"));
  }, []);

  return (
    <div className="flex w-full mx-auto items-center justify-center min-h-screen">
      <ul className="grid grid-cols-3 gap-4 p-4">
        {news?.map((items, index) => (
          <li key={index} className="border border-x-gray-300 p-2 rounded-lg">
            <p className="text-sm">{items.author}</p>
            <h3 className="font-bold text-lg">{items.title}</h3>
            <p className="text-sm text-gray-500">
              {moment(items.publishedAt).format("YYYY-MM-D")}
            </p>
            <p className="text-sm">{items.description}</p>
            <div className="flex gap-2 my-2">
              <a href={items.url} target="_blank" rel="noreferrer">
                <button className="bg-blue-400 p-1 rounded-sm">Detail</button>
              </a>
              <button className="bg-blue-700 p-1 rounded-sm text-white">
                Save
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ApiItems;
