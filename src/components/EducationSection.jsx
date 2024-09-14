import React from "react";
import { Education, Education_FR } from "../constants";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function EducationSection() {
  const lang=useSelector((state)=>state.lang)
  const Edu = lang === "en" ? Education : Education_FR;
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
            Education
          </motion.h2>
        </div>
        <div className="pt-5">
          {Edu.map((edu, index) => (
            <div key={index} className="grid grid-cols-1  sm:grid-cols-6  p-4">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="flex justify-center sm:col-span-2 mb-4 sm:m-auto backdrop-filter backdrop-blur-lg"
              >
                <p className="text-xl p-2">{edu.year}</p>
              </motion.div>
              <motion.div  whileInView={{ opacity: 1, x: 0 }}
                initial={{ x: 200, opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }} className="sm:col-span-4 backdrop-filter backdrop-blur-lg">
                <h3 className="text-4xl font-semi-bold mb-4">{edu.title}</h3>
                <h4 className="text-2xl font-semi-bold opacity-70 mb-4">
                  {edu.institution}
                </h4>
                <p className=" text-xl font-semi-bold opacity-75">
                  {edu.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default EducationSection;
