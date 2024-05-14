/* eslint-disable no-undef */
import React, { useContext } from "react";
import {Category} from "./Category";
import {Schedule} from "./Schedule";
import {Show}  from "../Context/Show";

export const Appointments = () => {
  const { select } = useContext(Show);

  return (
    <div >
        <div className="justify-center flex flex-col items-center pb-5">
          <h1 className=" text-4xl  font-bold ">thankyou for choosing </h1>
          <h2 className=" text-4xl  font-bold"> braids_by_marmora </h2>
        </div>
        <div className="w-full grid   gap-3 text-center  ">
          <div className="border-4  border-x-[#92A49A] rounded-lg p-4 pl-10">
            <h1 className="text-4xl">FAQ'S</h1>
            <ul className="list-disc ">
              <li>we're located at Gesr el suez.</li>
              <li>
                AFTER BOOKING YOU WILL RECEIVE A CONFIRMATION MASSAGE WITH THE
                LOCATION + HOW TO PROPERLY PREP YOUR HAIR PRIOR TO YOUR
                APPOINTMENT.
              </li>
              <li>HAIR IS INCLUDED FOR ALL STYLES.</li>
              <li>
                PLEASE CONTACT +201555842544 IF YOU HAVE ANY ADDITIONAL QUESTIONS.
              </li>
            </ul>
          </div>
        </div>
        <div className="py-4">
          {select ? (
            <div>
              <Schedule />
            </div>
          ) : (
            <div>
              <Category />
            </div>
          )}
        </div>
    </div>
  );
};