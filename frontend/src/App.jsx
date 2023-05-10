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
            className="flex flex-col items-center justify-center w-full h-80 bg-zinc-700 rounded-lg hover:bg-slate-800 cursor-pointer"
            key={item.id}
          >
            <img src={item.img} />
            <h2 className="text-2xl">{item.name}</h2>
            <span className="italic text-gray-400">{item.year}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
