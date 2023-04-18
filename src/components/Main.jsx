import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src="/mitch-mckee-Qhe9I6PhhZs-unsplash.jpg"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/10">
        <div className="max-w-[700px] m-auto w-full h-full flex flex-col justify-start items-center pt-48 md:pt-44">
          <h1 className="sm:text-7xl text-6xl font-extrabold pb-2 drop-shadow-xl shadow-black text-transparent bg-clip-text bg-gradient-to-l from-amber-600 via-amber-400 to-sky-100 animate-text font-poppins">
            I'm Dmitriy
          </h1>
          {/* lg:items-start */}
          <h2 className="flex sm:text-3xl text-2xl font-bold pt-4  drop-shadow-xl shadow-black text-transparent bg-clip-text bg-gradient-to-l from-amber-600 via-amber-400 to-sky-100 animate-text font-poppins">
            I'm a
            <TypeAnimation
              sequence={[
                "Developer",
                2000,
                "Coder",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "1em",
                display: "inline-block",
                paddingLeft: "5px",
              }}
            />
          </h2>
          <div className="flex justify-between max-w-[200px] w-full mt-6">
            <a href="https://twitter.com/Angve3" target="_blank">
              <FaTwitter
                className="cursor-pointer fill-amber-500/70 hover:scale-110 ease-in duration-300"
                size={30}
              />
            </a>
            <a href="https://github.com/DmitriyAngve" target="_blank">
              <FaGithub
                className="cursor-pointer fill-amber-500/70 hover:scale-110 ease-in duration-300"
                size={30}
              />
            </a>
            <a
              href="https://www.instagram.com/skaven_collector/"
              target="_blank"
            >
              <FaInstagram
                className="cursor-pointer fill-amber-500/70 hover:scale-110 ease-in duration-300"
                size={30}
              />
            </a>
            <a href="https://www.linkedin.com/in/dmitriyven" target="_blank">
              <FaLinkedin
                className="cursor-pointer fill-amber-500/70 hover:scale-110 ease-in duration-300"
                size={30}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
