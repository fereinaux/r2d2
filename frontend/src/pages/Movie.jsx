import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { getColorByTrilogy } from "../utils/colors";
import { Icon } from "@iconify/react";

Movie.propTypes = {
  id: PropTypes.string,
};
function Movie() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`https://r2d2-3yk4.onrender.com/movies/${id}`).then((response) => {
      if (response.status == 200) {
        response.json().then((json) => setMovie(json));
      } else {
        //navigate to notFound
      }
    });
  }, [id]);

  return (
    <>
      <div className="w-full h-[350px] sticky top-0 object-cover z-10">
        <div className="flex justify-center h-full items-center">
          <img
            className="w-full h-full -top-20 left-0 right-0 absolute z-0 blur-md"
            src={movie.img}
            alt=""
          />
          <img
            className="max-w-screen-sm w-full h-full object-cover object-top z-20"
            src={movie.img}
            alt=""
          />
          <div
            className={`top-0 left-0 right-0 bottom-0 bg-${getColorByTrilogy(
              movie.trilogy
            )}-900 absolute opacity-40 z-10`}
          ></div>
          <div
            className={`top-0 left-0 right-0 bottom-0 bg-black absolute opacity-60 z-30`}
          ></div>
          <Icon
            onClick={() => navigate("/")}
            className=" w-7 h-7 absolute z-40 cursor-pointer top-4 left-4"
            icon="material-symbols:arrow-back-rounded"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-5 text-center ">
        <h4 className="text-3xl font-bold max-w-screen-sm mt-16 mb-1">
          {movie.name}
        </h4>
        <span className="italic">{movie.year}</span>
        <p className="max-w-screen-sm mt-9 px-5">{movie.description}</p>
      </div>
    </>
  );
}

export default Movie;
