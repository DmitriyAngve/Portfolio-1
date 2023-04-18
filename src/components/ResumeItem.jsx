import React from "react";

const ResumeItem = () => {
  return (
    <div className="w-full m-auto md:pl-20 p-4 py-16 bg-gradient-to-r from-sky-100 to-amber-100">
      <div className="max-w-[1200px] mx-auto w-full flex justify-center">
        <a
          href="https://resume.io/r/UDD6iStxZ"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-[300px]"
        >
          <button className="bg-amber-300 text-xl text-[#273558] font-semibold mt-4 w-full p-4 rounded-lg hover:scale-110 ease-in duration-300">
            Open resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default ResumeItem;
