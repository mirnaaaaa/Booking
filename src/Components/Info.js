import { React, useContext } from "react";
import { Show } from "../Context/Show";
import { Selected } from "../Context/Selected";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

export const  Info = () => {
  const { choose , setInformation} = useContext(Show);
  const { date } = useContext(Selected);

  return (
      <div >
          <button className="flex my-6 hover:pointer" 
          onClick={() => setInformation(false)}
          >
            <MdOutlineKeyboardArrowLeft size={17} />
            <h1 className="text-xs font-bold">EDIT APPOINTMENT INFORMATION</h1>
          </button>
        {choose.map((x) => {
          return (
            <div className=" p-2  ">
              <div className=" border-2  p-2 flex sm:flex  ">
                <div className="flex flex-col my-3  ml-5 ">
                  <h1 className="font-bold">{x.map((a) => a.name)}</h1>
                  <p className="text-sm">{x.map((a) => a.time)}</p>
                  <h1 className="text-sm ">
                    {date.theTime.toLocaleString()}
                  </h1>
                </div>
              </div>
            </div>
          );
        })}
        <form className="flex flex-col w-full py-10 px-2 text-sm ">
          <span className="pb-1 font-bold">Name</span>
          <div className="flex gap-1 ">
            <input
              placeholder="First Name"
              type="text"
              className=" w-1/2 text-black"
            />
            <input
              placeholder="last Name"
              type="text"
              className="w-full text-black"
            />
          </div>
          <span className="pt-4 font-bold">Phone</span>
          <span className="py-1 text-xs">
            Add your phone number to receive an appointment reminder via text
            message.
          </span>
          <input className="text-black" type="number" />
        </form>
        <button
        className="bg-[#92A49A] text-sm p-3 text-white w-40 ml-3 rounded"
        >Pay Now</button>
      </div>
  );
}
