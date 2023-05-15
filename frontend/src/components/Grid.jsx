import { Link } from "react-router-dom";
import Badge from "./Badge";
import PropTypes from "prop-types";

Grid.propTypes = {
  movies: PropTypes.array,
};

export default function Grid({ movies }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {movies.map((item) => (
        <Link key={item.id} to={item.id}>
          <li className="group flex items-center justify-center text-center max-w-[480px] border-2 h-[285px] border-sky-500 rounded-2xl relative bg-slate-800 cursor-pointer">
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
        </Link>
      ))}
    </ul>
  );
}
