import { React, useContext } from "react";
import { Categories } from "../Helpers/Categories";
import { Show } from "../Context/Show";

export const Category = () => {
  const { setSelect, setBook } = useContext(Show);

  const handleBook = (id) => {
    const filter = Categories?.filter((x) => {
      return x.id === id.id;
    });
    setBook(filter);
    setSelect(true);
  };

  return (
    <div>
      <h1 className="text-sm font-bold">choose a category... </h1>
      <div>
        {Categories.map((e) => {
          return (
            <div
              key={e.id}
              className="border  p-2 mt-1 items-center justify-between flex"
            >
              <h1>{e.title}</h1>
              <button
           onClick={() => handleBook(e)}     
                className="border p-2 rounded-md bg-[#92A49A]   text-white  px-4   text-xs              "
              >
                Select
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
