import React from "react";
import ProjectItem from "./ProjectItem";
import mealsImg from "../assets/ReactMeals.jpg";
import bookmartImg from "../assets/Bookmart.jpg";
import forkifyImg from "../assets/Forkify.jpg";
import natoursImg from "../assets/Tours.jpg";

const projectsData = [
  { img: mealsImg, title: "Food-App", tech: ["React JS"] },
  { img: forkifyImg, title: "Recipe-App", tech: ["JavaScript"] },
  { img: bookmartImg, title: "Store-App", tech: ["React JS/Redux TK"] },
  { img: natoursImg, title: "Travel-App", tech: ["HTML/SASS"] },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full m-auto md:pl-20 p-4 py-16 bg-gradient-to-r from-sky-100 to-amber-100"
    >
      <h1 className="text-4xl font-bold text-center text-[#273558] mb-6">
        Projects
      </h1>
      <div className="grid sm:grid-cols-2 gap-12">
        {projectsData.map((project, index) => (
          <ProjectItem
            key={index}
            img={project.img}
            title={project.title}
            tech={project.tech}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
