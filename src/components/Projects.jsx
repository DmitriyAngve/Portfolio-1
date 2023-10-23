import React from "react";
import ProjectItem from "./ProjectItem";

import BlogAI from "../assets/BlogAI.jpg";

import Dashboard from "../assets/Dashboard.jpg";
import DiscordClone from "../assets/Discord-Clone.jpg";
import LMSproject from "../assets/LMS-project.jpg";
import ThreeJs from "../assets/ThreeJs.jpg";
import SASS from "../assets/SAAS-AI.jpg";

const projectsData = [
  {
    img: BlogAI,
    title: "Blog with AI-generated content",
    tech: ["NextJS/TypeScript"],
    href: "https://github.com/DmitriyAngve/blog-ai",
  },
  {
    img: Dashboard,
    title: "Finance Dashboard",
    tech: ["MERN Stack"],
    href: "https://github.com/DmitriyAngve/Dashboard",
  },
  {
    img: DiscordClone,
    title: "Discord Clone",
    tech: ["NextJS/TypeScript"],
    href: "https://github.com/DmitriyAngve/discord",
  },
  {
    img: LMSproject,
    title: "LMS Project",
    tech: ["NextJS/TypeScript"],
    href: "https://github.com/DmitriyAngve/lms-project",
  },
  {
    img: ThreeJs,
    title: "AI 3D Website",
    tech: ["React/ThreeJS/Express"],
    href: "https://github.com/DmitriyAngve/threejs",
  },
  {
    img: SASS,
    title: "SAAS AI Platform",
    tech: ["NextJS/TypeScript"],
    href: "https://github.com/DmitriyAngve/sass-ai",
  },
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
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        {projectsData.map((project, index) => (
          <ProjectItem
            key={index}
            img={project.img}
            title={project.title}
            tech={project.tech}
            href={project.href}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
