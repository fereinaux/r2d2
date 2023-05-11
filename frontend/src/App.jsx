import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://r2d2-3yk4.onrender.com/movies").then((response) =>
      response.json().then((json) => setMovies(json))
    );
  }, []);

  return (
    <>
      <ul className="grid grid-cols-3 gap-8 w-full p-8">
        {movies.map((item) => (
          <li
            className="group text-center m-20 border-2 h-[285px] border-sky-500 rounded-2xl relative bg-slate-800 cursor-pointer"
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
