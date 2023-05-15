import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

Movie.propTypes = {
  id: PropTypes.string,
};
function Movie() {
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
      <div className="w-full h-[350px] sticky top-0 object-cover">
        <div className="flex justify-center h-full items-center">
          <img
            className="w-full h-full -top-20 left-0 right-0 absolute z-0 blur-md"
            src={movie.img}
            alt=""
          />
          <img
            className="max-w-screen-sm w-full h-full object-cover object-top z-10"
            src={movie.img}
            alt=""
          />
          <div className="top-0 left-0 right-0 bottom-0 bg-black absolute opacity-75 z-20"></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-6 p-5 text-center">
        <h4 className="text-3xl font-bold max-w-screen-sm mt-16">
          {movie.name}
        </h4>
        <p className="max-w-screen-sm">
          Obi-Wan e seu mentor embarcam em uma perigosa aventura na tentativa de
          salvar o planeta das garras de Darth Sidious. Durante a viagem, eles
          conhecem um habilidoso menino e decidem treiná-lo para se tornar um
          Jedi. Mas o tempo irá revelar que as coisas nem sempre são o que
          aparentam ser.
        </p>
      </div>
    </>
  );
}

export default Movie;
