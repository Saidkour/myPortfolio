import React from "react";
import { EXPERIENCE, EXPERIENCE_FR } from "../constants";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
function ExperienceSection() {
  const lang = useSelector((state) => state.lang);
  const dark = useSelector((state) => state.dark);
  const EXP = lang === "en" ? EXPERIENCE : EXPERIENCE_FR;
  return (
    <>
      {/* <hr className="sm:w-[600px] pt-[100px] mt-20 m-auto" /> */}
      <div className=" px-5 overflow-hidden container m-auto">
        <div className="text-center p-2">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-5xl mb-20  opacity-85"
          >
            Experience
          </motion.h2>
        </div>
        <div className="p-5 mb-20 rounded-md backdrop-filter backdrop-blur-lg">
          {EXP.map((exp, index) => (
            <div key={index} className="grid grid-cols-1  sm:grid-cols-6  p-4">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="flex justify-center sm:col-span-2 mb-4 sm:m-auto "
              >
                <p className="text-xl p-2">{exp.year}</p>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ x: 200, opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="sm:col-span-4 "
              >
                <h3 className="text-4xl  mb-4">{exp.company}</h3>
                <h4 className="text-xl  opacity-70 mb-4">{exp.role}</h4>
                <p className=" text-md opacity-75">{exp.description}</p>
                <p className="font-semi-bold grid grid-cols-3 sm:grid-cols-5 opacity-75">
                  {exp.technologies.map((tech, index) => (
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

export default ExperienceSection;
