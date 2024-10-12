import React, { useState } from "react";
import { CONSTANTS } from "../constants/index";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";

function ProjectsSection() {
  const lang = useSelector((state) => state.lang);
  const PRO = lang === "en" ? CONSTANTS.PROJECTS : CONSTANTS.PROJECTS_FR;
  return (
    <>
      <div className=" px-5 py-9 container overflow-hidden m-auto">
        <div className="text-center p-2">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-5xl mb-20  opacity-85"
          >
            Projects
          </motion.h2>
        </div>
        <div className="grid sm:grid-cols-6 grid-cols-1 gap-2 sm:gap-6  rounded-2xl">
          {PRO.map((projet, index) => (
            <ProjetCard key={index} projet={projet} />
          ))}
        </div>
      </div>
    </>
  );
}
const ProjetCard = ({ projet }) => {
  const dark = useSelector((state) => state.dark);
  const [currentImg, setCurrentImg] = useState(projet.image[0]);
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`${
        dark ? "backdrop-blur-sm" : "backdrop-blur-lg bg-transparent "
      } drop-shadow-lg  transition-all duration-150 ease-out shadow-xl shadow-primary sm:col-span-3 rounded-lg mt-2 p-4`}
    >
      <div className="md:p-6  m-auto justify-center">
        <img
          className="rounded-md"
          loading="lazy"
          src={currentImg}
          alt={projet.title}
        />
        <div className="flex rounded-sm mt-1  justify-end">
          {projet?.image.length > 1 &&
            projet?.image.map((path, index) => {
              return (
                <img
                  onMouseEnter={() => setCurrentImg(path)}
                  key={index}
                  src={path}
                  alt="img"
                  className={`ml-1 ${
                    currentImg == path ? "border-primary border" : "border-none"
                  } sm:w-[100px] w-[70px] rounded-md`}
                />
              );
            })}
        </div>
      </div>
      <motion.div
        className="sm:col-span-4 pt-4 p-2 "
        // whileInView={{ opacity: 1, x: 0 }}
        // initial={{ x: 200, opacity: 0 }}
        // transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h3 className="text-2xl font-semi-bold mb-4">{projet.title}</h3>
        <h4 className="md:text-sm opacity-70 mb-4">{projet.description}</h4>
        <p
          //   whileInView={{ opacity: 1, x: 0 }}
          //   initial={{ x: 50, opacity: 0 }}
          //   transition={{ duration: 0.9, ease: "backOut" }}
          className="font-semi-bold grid grid-cols-6 sm:grid-cols-12 opacity-75"
        >
          {projet.technologies.map((tech, index) => (
            <span
              key={index}
              className={`p-2 text-center md:text-[43px] text-[28px] md:text-xl  grid-cols-1 mt-4`}
            >
              {tech}
            </span>
          ))}
        </p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mt-5  flex  text-center"
        >
          <a
            className={`py-2 rounded-3xl ${
              projet.demo ? "cursor-pointer" : "cursor-none"
            } bg-primary min-w-[100px]  ml-4  border border-primary hover:bg-transparent ${
              dark
                ? "text-white hover:text-primary"
                : "text-white hover:text-primary"
            }`}
            href={`${projet.demo ? projet.demo : ""}`}
            target={`${projet.demo ? "_blanck" : ""}`}
          >
            {`${projet.demo ? "Demo" : ""}`}
          </a>
          <a
            className={`py-2 px-3 rounded-3xl bg-primary flex max-w-52  ml-4 border  hover:border border-primary hover:bg-transparent ${
              dark
                ? "text-white hover:text-primary"
                : "text-white hover:text-primary"
            }`}
            href={`${projet.repo ? projet.repo : "#"}`}
            target={`${projet.demo ? "_blanck" : ""}`}
          >
            Code |
            <SiGithub className="m-auto ml-2" />
          </a>
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsSection;
