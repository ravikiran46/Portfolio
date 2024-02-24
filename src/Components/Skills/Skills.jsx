// import React from "react";

import html from "./assets/html 5.png";
import css from "./assets/css.png";
import javascript from "./assets/js.png";
import reactImage from "./assets/react-logo.svg";
import db from "./assets/mongo_logo.jpg";
import java from "./assets/java1.png";
import github from "./assets/github.png";
import Python from "./assets/Python.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      // style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      // style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      // style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      // style: "shadow-blue-600",
    },
    {
      id: 5,
      src: Python,
      title: "Python",
      // style: "shadow-sky-400",
    },
    {
      id: 6,
      src: db,
      title: "Mongo DB",
      // style: "shadow-white",
    },
    {
      id: 7,
      src: java,
      title: "Java",
      // style: "shadow-pink-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      // style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="Skills"
      className="bg-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title}) => (
            <div
              key={id}
              className="py-2"
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default Experience;