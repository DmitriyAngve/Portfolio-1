import React from "react";
// import TechItems from "./TechItems";

const ProjectItem = ({ img, title, tech }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-amber-500 shadow-right rounded-md group hover:bg-gradient-to-r from-sky-100 to-amber-200">
      <img
        src={img}
        alt=""
        className="w-full h-full rounded-xl group-hover:opacity-40"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl font-bold text-[#273558] tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-amber-800 text-center">
          {tech.map((t, i) => (
            <span key={i} className="text-xl font-bold text-[#273558]">
              {t}
            </span>
          ))}
        </p>
        <a href="/">
          <p className="text-center p-3 rounded-full bg-sky-50 text-[#273558] font-bold cursor-pointer text-lg">
            More info
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
