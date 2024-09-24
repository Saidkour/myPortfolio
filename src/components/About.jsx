import React from "react";
import aboutImg from "../assets/about.webp";
import { ABOUT_TEXT, ABOUT_TEXT_FR } from "../constants/index";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function About() {
  const lang = useSelector((state) => state.lang);
  const ABOUT_TE = lang === "en" ? ABOUT_TEXT : ABOUT_TEXT_FR;
  return (
    <>
      {/* <hr className="sm:w-[600px] pt-[50px] mt-12 m-auto" /> */}
      <div className="px-5 container overflow-hidden  m-auto">
        <div className="text-center p-[50px]">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-5xl"
          >
            About <span className="opacity-50">Me</span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1   md:grid-cols-2 p-4 ">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="p-4 flex justify-center"
          >
            <img
              className="rounded-md "
              width={400}
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
              {ABOUT_TE}
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default About;
