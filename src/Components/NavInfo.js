import React, { useContext } from "react";
import  {Show}  from "../Context/Show";
import  {Appointments}  from "./Appointments";
import {Info} from "./Info";

export const NavInfo = () => {
    const { information } = useContext(Show);

const active = 'text-[#567552] '
const normal = ''

    return (
    <div className=" h-full-screen w-full bg-[#99AC96] py-10 text-sm">
      <div className="  max-w-[52rem] p-4 mx-auto justify-center flex flex-col  bg-white rounded">
      <div className="border-b mb-4 text-xs">
        <div className="flex items-center  justify-between mx-8 mb-4 ">
            <ul className={information ? normal : active}>Choose Appointment
            </ul>
            <ul  className={information ? active : normal}>Your Info</ul>
            <ul>Confirmation</ul>
          </div>
        </div>
        {information ?  (
            <div>
            <Info />
            </div>
          ) : (
            <div>
             <Appointments />
            </div>
          )}
      </div>
    </div>
  );
};
