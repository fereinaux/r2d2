import { useState, useEffect } from "react";
import Grid from "../components/Grid";
import Table from "../components/Table";

function Home() {
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
          <Grid movies={movies} />
        ) : (
          <Table movies={movies} />
        )}
      </div>
    </>
  );
}

export default Home;
