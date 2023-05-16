import { useState, useEffect } from "react";
import Grid from "../components/Grid";
import Table from "../components/Table";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
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
      <div className="flex flex-col w-full justify-start items-center p-6 h-screen relative">
        <div className="flex items-center justify-center max-w-screen-xl w-full mb-12">
          <div className="mr-3 text-gray-200 font-medium ml-auto">Table</div>
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
          <div
            onClick={() => navigate("/create")}
            className="ml-auto bg-slate-500 cursor-pointer hover:bg-slate-700 p-4 rounded-full"
          >
            <Icon className=" w-7 h-7" icon="mdi:movie-edit" />
          </div>
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
