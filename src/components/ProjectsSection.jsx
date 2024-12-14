import React, { useState, useEffect } from "react";
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
        <div className="grid lg:grid-cols-6 grid-cols-1 gap-2 lg:gap-6  rounded-2xl">
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prevImg) => {
        const currentIndex = projet.image.indexOf(prevImg);
        const nextIndex = (currentIndex + 1) % projet.image.length;
        return projet.image[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [projet.image]);
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`${
        dark ? "backdrop-blur-sm" : "backdrop-blur-lg bg-transparent "
      }  transition-all duration-200 flex flex-col justify-between ease-in-out  lg:col-span-3 rounded-lg mt-2 p-4`}
    >
      <div className="md:p-6 relative h-[240px] md:h-auto m-auto justify-center">
        <motion.div
          whileInView={{
            boxShadow: [
              "0px 0px 0px rgba(0, 0, 0, 0)",
              "0px 0px 20px rgba(0, 0, 0, 0.5)",
              "0px 0px 15px rgba(0, 0, 0, 0.75)",
              "0px 0px 10px rgba(0, 0, 0, 0.9)",
              "0px 0px 15px rgba(0, 0, 0, 0.75)",
              "0px 0px 20px rgba(0, 0, 0, 0.5)",
              "0px 0px 0px rgba(0, 0, 0, 0)",
            ],
          }}
          transition={{
            duration: 3,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          className={`absulote z-10 h-3 w-3 md:top-0 ${
            projet.demo ? "bg-green-500" : "bg-red-500"
          } rounded-full  text-6xl md:text-8xl right-0 `}
        ></motion.div>
        <img
          className="rounded-md mt-1  flex m-auto"
          loading="lazy"
          width={500}
          height={180}
          src={currentImg}
          alt={projet.title}
        />

        <div className="flex rounded-sm mt-1 justify-center">
          {projet?.image.length > 1 &&
            projet?.image.map((path, index) => {
              return (
                <div
                  key={index}
                  className="w-[80px] ml-1 h-auto sm:w-[100px] sm:h-auto overflow-hidden"
                >
                  <img
                    onClick={() => setCurrentImg(path)}
                    src={path}
                    width={100}
                    height={100}
                    alt="img"
                    loading="lazy"
                    className={` ${
                      currentImg == path
                        ? "border-primary border"
                        : "border-none"
                    } cursor-pointer  hover:border-yellow-300 rounded-md`}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <motion.div className="sm:col-span-4 pt-4 p-2 ">
        <h3 className="text-2xl font-semi-bold mb-4">{projet.title}</h3>
        <h4 className="md:text-sm opacity-70 mb-4">{projet.description}</h4>
      </motion.div>
      <div className="flex flex-col justify-between m-auto ">
        <p className="font-semi-bold grid grid-cols-6 sm:grid-cols-12 opacity-75">
          {projet.technologies.map((tech, index) => (
            <span
              key={index}
              className={`p-2 text-center md:text-[43px] text-[28px] md:text-xl cursor-pointer  grid-cols-1 mt-4`}
            >
              {tech}
            </span>
          ))}
        </p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mt-5 grid grid-cols-2 text-center"
        >
          <a
            className={`py-2 rounded-3xl ${
              projet.demo ? "cursor-pointer" : "cursor-none"
            } bg-primary justify-center primary hover:bg-transparent hover:border-primary hover:border ${
              dark
                ? "text-black hover:text-primary"
                : "text-white hover:text-primary"
            }`}
            href={`${projet.demo ? projet.demo : ""}`}
            target={`${projet.demo ? "_blanck" : ""}`}
          >
            {`${projet.demo ? "Demo" : ""}`}
          </a>
          <a
            className={`py-2 flex p-9 rounded-3xl md:justify-center  hover:bg-primary ml-4 border  hover:border border-primary bg-transparent ${
              dark
                ? "text-primary hover:text-black"
                : "text-primary hover:text-white"
            }`}
            href={`${projet.repo ? projet.repo : "#"}`}
            target={`${projet.demo ? "_blanck" : ""}`}
          >
            <span className="flex  justify-center">
              <span> Code |</span>
              <SiGithub className="flex m-auto ml-2 " />
            </span>
          </a>
        </motion.p>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
