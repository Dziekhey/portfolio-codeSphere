/* eslint-disable react/prop-types */
import React from "react";

const ExperienceCard = ({ experience }) => {
//   return (
//     <div className="bg-slate-500 ">
  return (
    <div className="">
    <div>
      <div className="w-full  h-1/3 group flex">
        <div className="w-6 h-[6px] bgOpacity mt-16 relative">
          <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-gray-950">
            <span className="w-3 h-3 rounded-full inline-flex group-hover:bg-designColor duration-300"></span>
          </span>
        </div>
        <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300  rounded-lg p-4 lgl:px-10 flex flex-col justify-center gap-6 lgl:gap-10 shadow-shadowOne">
          <div className="flex flex-row  lgl:flex-row justify-between gap-4 lgl:gap-0 lgl:items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
                {experience.title}
              </h3>
              <p className="text-sm mt-2 group-hover:text-white duration-300">
                {experience.organisation}
              </p>
            </div>
            <div>
              <p className="px-4 py-2 text-designColor c bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium group-hover:text-white duration-300">
                {experience.end_date}
              </p>
            </div>
          </div>
          <p className="text-sm md:text-base font-medium  group-hover:text-gray-300 duration-300">
            {experience.description}
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ExperienceCard;
