import React from "react";

const WorkItem = ({ year, title, duration, details }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-amber-300">
      <li className="mb-10 ml-4 ">
        <div className="absolute w-3 h-3 bg-amber-200 rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap gap-4 flex-row justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-[#273558] bg-amber-300 rounded-md">
            {year}
          </span>
          <span className="text-lg font-semibold text-[#273558]">{title}</span>
          <span className="my-2 text-sm font-normal leading-none text-sky-500">
            {duration}
          </span>
        </p>
        <p>
          <span className="my-2 text-base text-[#273558]">{details}</span>
        </p>
      </li>
    </ol>
  );
};

export default WorkItem;
