import React from "react";
import { PROJECTS, PROJECTS_FR } from "../constants";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";

function ProjectSection() {
  const dark = useSelector((state) => state.dark);
  const lang = useSelector((state) => state.lang);

  const PRO = lang === "en" ? PROJECTS : PROJECTS_FR;
  return (
    <>
      <div className=" px-5 py-4 container overflow-hidden m-auto">
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
        <div className="pt-5 backdrop-filter backdrop-blur-lg rounded-2xl">
          {PRO.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-1 mt-2 sm:grid-cols-6 p-4"
            >
              <div className="sm:col-span-2 md:p-6  m-auto justify-center">
                <motion.img
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ x: -200, opacity: 0 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className=""
                  src={project.image}
                  alt={project.title}
                />
                <motion.p
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ x: 100, opacity: 0 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                  className="mt-5  flex justify-evenly text-center"
                >
                  <a
                    className={`py-2 px-3 rounded-3xl ${
                      project.demo ? "cursor-pointer" : "cursor-none"
                    } bg-primary min-w-[100px]  ml-4  border border-primary hover:bg-transparent ${
                      dark
                        ? "text-white hover:text-primary"
                        : "text-white hover:text-primary"
                    }`}
                    href={`${project.demo ? project.demo : ""}`}
                    target={`${project.demo ? "_blanck" : ""}`}
                  >
                    {`${project.demo ? "Demo" : ""}`}
                  </a>
                  <a
                    className={`py-2 px-3 rounded-3xl bg-primary flex max-w-52  ml-4 border  hover:border border-primary hover:bg-transparent ${
                      dark
                        ? "text-white hover:text-primary"
                        : "text-white hover:text-primary"
                    }`}
                    href={`${project.repo ? project.repo : "#"}`}
                    target={`${project.demo ? "_blanck" : ""}`}
                  >
                    Code
                    <SiGithub className="m-auto ml-2" />
                  </a>
                </motion.p>
              </div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ x: 200, opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="sm:col-span-4 pt-10 p-2 "
              >
                <h3 className="text-4xl font-semi-bold mb-4">
                  {project.title}
                </h3>
                <h4 className="text-xl font-meduim opacity-70 mb-4">
                  {project.description}
                </h4>
                <p className="font-semi-bold grid grid-cols-3 sm:grid-cols-5 opacity-75">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`mr-2 p-2 border rounded-3xl text-center text-[14px] md:text-xl  grid-cols-1 mt-4  ${
                        dark
                          ? "text-primary hover:text-black hover:bg-primary border-primary"
                          : "text-primary border-primary hover:bg-primary hover:text-blue-100"
                      } `}
                    >
                      {tech}
                    </span>
                  ))}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectSection;
