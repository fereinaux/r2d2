import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getColorByTrilogy } from "../utils/colors";

export default function Create() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const response = await fetch("https://r2d2-3yk4.onrender.com/movies/", {
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });

    if (response.status == 201) {
      navigate("/");
    } else {
      toast.error("we have some error creating your movie", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex h-screen relative flex-col justify-center items-center gap-4 max-w-screen-sm m-auto p-10"
      >
        <Icon
          onClick={() => navigate("/")}
          className=" w-7 h-7 absolute z-40 cursor-pointer top-12 left-4"
          icon="material-symbols:arrow-back-rounded"
        />

        <label htmlFor="name">Name</label>
        <input
          className={`rounded-lg p-2 w-full ${
            errors.name && "outline outline-2 outline-red-400"
          }`}
          id="name"
          {...register("name", {
            required: "name is required",
          })}
        />
        {errors.name && (
          <span className="text-red-400">{errors.name.message}</span>
        )}

        <label htmlFor="description">Description</label>
        <textarea
          className={`rounded-lg h-32 p-2 w-full ${
            errors.description && "outline outline-2 outline-red-400"
          }`}
          id="description"
          {...register("description", {
            required: "description is required",
          })}
        />
        {errors.description && (
          <span className="text-red-400">{errors.description.message}</span>
        )}

        <label htmlFor="trilogy">Trilogy</label>

        <select
          id="trilogy"
          className={`rounded-lg p-2 w-full ${
            errors.trilogy && "outline outline-2 outline-red-400"
          } bg-${getColorByTrilogy(watch("trilogy"))}-900`}
          defaultValue={"classic"}
          {...register("trilogy", {
            required: "trilogy is required",
          })}
        >
          <option value="classic">classic</option>
          <option value="prequel">prequel</option>
          <option value="sequel">sequel</option>
        </select>
        {errors.trilogy && (
          <span className="text-red-400">{errors.trilogy.message}</span>
        )}

        <label htmlFor="img">Poster Url</label>
        <input
          className={`rounded-lg p-2 w-full ${
            errors.img && "outline outline-2 outline-red-400"
          }`}
          id="img"
          {...register("img", {
            required: "poster url is required",
          })}
        />
        {errors.img && (
          <span className="text-red-400">{errors.img.message}</span>
        )}

        <label htmlFor="year">Year</label>
        <input
          type="number"
          className={`rounded-lg p-2 w-full ${
            errors.year && "outline outline-2 outline-red-400"
          }`}
          id="year"
          {...register("year", {
            valueAsNumber: true,
            min: {
              value: 1970,
              message: "year must be greater than 1970",
            },
            max: {
              value: 2010,
              message: "year must be lesser than 2100",
            },
            required: "year is required",
          })}
        />
        {errors.year && (
          <span className="text-red-400">{errors.year.message}</span>
        )}

        <label htmlFor="sequential">Sequential</label>
        <input
          type="number"
          className={`rounded-lg p-2 w-full ${
            errors.year && "outline outline-2 outline-red-400"
          }`}
          id="sequential"
          {...register("sequential", {
            valueAsNumber: true,
            min: {
              value: 1,
              message: "sequential must be greater than 1",
            },
            required: "sequential is required",
          })}
        />
        {errors.sequential && (
          <span className="text-red-400">{errors.sequential.message}</span>
        )}

        <input
          className="bg-zinc-600 w-full rounded-lg p-2 hover:bg-zinc-800 cursor-pointer mt-10"
          type="submit"
        />
      </form>
    </>
  );
}
