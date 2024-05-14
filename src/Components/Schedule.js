import { React, useContext } from "react";
import {Book} from "./Book";
import { Show } from "../Context/Show";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export const Schedule = () => {
  const { book, setChoose, choose, setSelect } = useContext(Show);

  const changeSelect = () => {
    setSelect(false);
    setChoose("");
  };

  const appointment = (id) => {
    const filter = book?.map((x) =>
      x.image.filter((x) => {
        return x.name === id;
      })
    );
    setChoose(filter);
  };

  return (
    <div>
      <div>
        <button className="text-sm font-bold flex" onClick={changeSelect}>
          <MdOutlineKeyboardArrowLeft size={20} />
          view all categories
        </button>
        {book.map((e) => {
          return (
            <div>
              <div className="border-2  p-2 my-3 ">
                <h1>{e.title}</h1>
              </div>
              {choose ? (
                <>
                  <Book />
                </>
              ) : (
                <>
                  <h1 className="text-sm font-bold py-1">
                    I would like to schedule...
                  </h1>
                  {e.image.map((x, i) => {
                    return (
                      <div key={i} className="border-4  p-6 mt-3 grid ">
                        <div className="sm:flex ">
                          <img
                            src={x.i}
                            alt="look"
                            className="rounded-md h-60  "
                          />
                          <div className="sm:flex  sm:justify-between w-full mt-1">
                            <div className="flex flex-col  sm:ml-4  ">
                              <h1 className="font-bold">{x.name}</h1>
                              <p className="text-sm">{x.time}</p>
                              <h1 className="pt-4 text-sm">- lasts {x.stay}</h1>
                              <p className="text-sm">- waist length</p>
                            </div>
                            <div className="flex mt-1 ">
                              <button
                                onClick={() => appointment(x.name)}
                                className="h-8 border rounded-md bg-[#92A49A] text-xs px-8 text-white"
                              >
                                Book
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
