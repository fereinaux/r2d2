import { Link, useNavigate, useRoutes } from "react-router-dom";
import Badge from "./Badge";
import PropTypes from "prop-types";

Table.propTypes = {
  movies: PropTypes.array,
};

export default function Table({ movies }) {
  const navigate = useNavigate();

  return (
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
              key={item.id}
              onClick={() => navigate(item.id)}
              className={`${
                index % 2 == 0 ? "" : "bg-slate-800"
              } border-b dark:border-neutral-500 hover:bg-slate-700 cursor-pointer`}
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
  );
}
