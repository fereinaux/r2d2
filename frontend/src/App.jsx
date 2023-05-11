import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [tooggleButtonText, settooggleButtonText] = useState("Grid");

  const toggleView = () =>
    settooggleButtonText(tooggleButtonText == "Grid" ? "Table" : "Grid");

  useEffect(() => {
    fetch("https://r2d2-3yk4.onrender.com/movies").then((response) =>
      response.json().then((json) => setMovies(json))
    );
  }, []);

  return (
    <>
      <div className="flex flex-col w-full justify-start items-center p-6 h-screen">
        <div className="flex items-center justify-center w-full mb-12">
          <div className="mr-3 text-gray-200 font-medium">Table</div>
          <label htmlFor="toggleB" className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                checked={tooggleButtonText == "Grid"}
                id="toggleB"
                className="sr-only"
                onChange={toggleView}
              />
              <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
              <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            </div>
            <div className="ml-3 text-gray-200 font-medium">Grid</div>
          </label>
        </div>

        {tooggleButtonText == "Grid" ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
            {movies.map((item) => (
              <li
                className="group flex items-center justify-center text-center max-w-[480px] border-2 h-[285px] border-sky-500 rounded-2xl relative bg-slate-800 cursor-pointer"
                key={item.id}
              >
                <div className="overflow-hidden h-full w-full rounded-2xl">
                  <img
                    className="h-full min-w-full group-hover:scale-125 transition-all duration-500 cursor-pointer opacity-30 group-hover:opacity-70"
                    src={item.img}
                    alt=""
                  />
                </div>
                <div className="absolute w-2/3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="flex flex-col gap-4 items-center justify-center">
                    <h2 className="text-3xl">{item.name}</h2>
                    <span className="italic">Release: {item.year}</span>
                    <Badge trilogy={item.trilogy} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex items-center h-full">
            <table className="max-w-[600px] text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Year
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Trilogy
                  </th>
                </tr>
              </thead>
              <tbody>
                {movies.map((item, index) => (
                  <tr
                    className={`${
                      index % 2 == 0 ? "" : "bg-slate-800"
                    } border-b dark:border-neutral-500 hover:bg-slate-700 cursor-pointer`}
                    key={item.id}
                  >
                    <td className="whitespace-nowrap px-6 py-4">{item.name}</td>
                    <td className="whitespace-nowrap px-6 py-4">{item.year}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <Badge trilogy={item.trilogy} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

function Badge({ trilogy }) {
  let cor = "red";

  switch (trilogy) {
    case "prequel":
      cor = "blue";
      break;
    case "classic":
      cor = "green";
      break;
    default:
      break;
  }

  return (
    <span className={`italic text-white bg-${cor}-600 rounded-xl p-2`}>
      {trilogy}
    </span>
  );
}

export default App;
