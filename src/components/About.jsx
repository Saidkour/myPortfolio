import React from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants/index";
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <hr className="sm:w-[600px] pt-[50px] mt-12 m-auto" />
      <div className="px-5 container overflow-hidden  m-auto">
        <div className="text-center p-[50px]">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-5xl"
          >
            About <span className="opacity-30 hover:opacity-100">Me</span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1   sm:grid-cols-2 p-4 ">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="p-4 flex justify-center"
          >
            <img
              className="rounded-md w-[400px]"
              src={aboutImg}
              alt="aboutImg"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: 200, opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="p-4 "
          >
            <p className="flex text-justify  backdrop-filter backdrop-blur-lg">
              {/* Welcome to my portfolio! I am a passionate web developer with
            experience in JavaScript and React. I love creating beautiful and
            functional websites that provide great user experiences. Feel free
            to explore my projects and get in touch with me if you have any
            questions or opportunities for collaboration. */}
              {ABOUT_TEXT}
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default About;
