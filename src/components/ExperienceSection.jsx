import React from "react";
import { CONSTANTS } from "../constants/index";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
function ExperienceSection() {
  const lang = useSelector((state) => state.lang);
  const dark = useSelector((state) => state.dark);
  const EXP = lang === "en" ? CONSTANTS.EXPERIENCE : CONSTANTS.EXPERIENCE_FR;
  return (
    <>
      <div className="mt-10 px-5 overflow-hidden container m-auto">
        <div className="text-center flex justify-center  p-2">
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
                transition={{ duration: 0.9, ease: "backInOut" }}
                className="flex justify-center sm:col-span-2 mb-4 sm:m-auto "
              >
                <p className="text-xl p-2 text-primary">{exp.year}</p>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ x: 200, opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="sm:col-span-4 "
              >
                <h3 className="md:text-2xl text-2xl font-semi-bold mb-4">
                  {exp.company}
                </h3>
                <h4 className="md:text-2xl text-xl font-semi-bold opacity-80 mb-4">
                  {exp.role}
                </h4>
                <p className=" text-[14px] md:text-xl font-semi-bold opacity-65">
                  {exp.description}
                </p>
                <p className="font-semi-bold grid grid-cols-6 sm:grid-cols-12 opacity-75">
                  {exp.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`p-2 text-center md:text-[42px] text-[28px] md:text-xl  grid-cols-1 mt-4`}
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
