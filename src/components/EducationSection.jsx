import React from "react";
import { CONSTANTS } from "../constants/index";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function EducationSection() {
  const lang = useSelector((state) => state.lang);
  const Edu = lang === "en" ? CONSTANTS.Education : CONSTANTS.Education_FR;
  return (
    <>
      {/* <hr className="sm:w-[600px] pt-[100px] mt-20 m-auto" /> */}
      <div className=" px-5 overflow-hidden container m-auto ">
        <div className="text-center p-2">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.9, ease:"easeInOut" }}
            className="text-5xl mb-20  opacity-85"
          >
            Education
          </motion.h2>
        </div>

        <div className="py-5 md:max-w-[800px] m-auto backdrop-filter backdrop-blur-lg">
          {Edu.map((edu, index) => (
            <div key={index} className="grid grid-cols-12 p-2">
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ y: 100, opacity: 0 }}
                transition={{ duration: 0.9, ease:"easeInOut" }}
                className="flex flex-col col-span-2 pt-2 items-center"
              >
                <div className="w-4 h-4  bg-primary rounded-full "></div>
                <div className="border-l-2 border-gray-300 h-full"></div>
              </motion.div>
              <div className="col-span-10">
                <motion.div
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ x: -200, opacity: 0 }}
                  transition={{ duration: 0.9, ease:"backInOut" }}
                  className="sm:col-span-2 mb-4 sm:m-auto backdrop-filter backdrop-blur-lg"
                >
                  <p className="text-xl text-primary ">{edu.year}</p>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ y: 80, opacity: 0 }}
                  transition={{ duration: 0.9, ease:"easeInOut" }}
                  className="sm:col-span-4 backdrop-filter backdrop-blur-lg"
                >
                  <h3 className="md:text-2xl text-2xl pt-2 font-semi-bold mb-4">
                    {edu.title}
                  </h3>
                  <h4 className="md:text-2xl text-xl font-semi-bold opacity-80 mb-1">
                    {edu.institution}
                  </h4>
                  <p className="text-[14px] md:text-xl font-semi-bold opacity-65">
                    {edu.description}
                  </p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default EducationSection;
