import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2022,
    title: "Frontend Developer",
    duration: "over 1 year",
    details:
      "Worked on various projects using technologies such as JavaScript, TypeScript, React, Vue 3, SAAS/SCSS, Tailwind, Redux Toolkit, Zustand, ThreeJS, Framer Motion, Nextjs, MySQL, MongoDB, Node.JS, Express, Websockets, Socket.io, Webhooks and other related technologies.",
  },
  {
    year: 2011,
    title: "Lead Engineer",
    duration: "11 years",
    details:
      "Worked as lead engineer at the nuclear plant. The main duties were to manage the production activities of subordinate personnel for the repair of reactor equipment and the management of radioactive waste and nuclear fuel, as well as to control the observance of technological processes and production regimes, elimination of the causes of their violation, participation in the development of documentation, analysis of the results of production activities.",
  },
];

const Work = () => {
  return (
    <div
      id="work"
      className="w-full m-auto md:pl-20 p-4 py-16 bg-gradient-to-r from-sky-100 to-amber-100"
    >
      {/* max-w-[1040px] */}
      <h1 className="text-4xl font-bold text-center text-[#273558] mb-6">
        Work
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
