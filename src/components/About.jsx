import React from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants/index";

function About() {
  return (
    <div className="pt-[100px] px-5 container m-auto">
      <div className="text-center p-[50px]">
        <h2 className="text-5xl">
          About <span className="opacity-30 hover:opacity-100">Me</span>
        </h2>
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-2 p-4 ">
        <div className="p-4 flex justify-center">
          <img className="rounded-md w-[400px]" src={aboutImg} alt="aboutImg" />
        </div>
        <div className="p-4 ">   
          <p className="flex text-justify  backdrop-filter backdrop-blur-lg">
            {/* Welcome to my portfolio! I am a passionate web developer with
            experience in JavaScript and React. I love creating beautiful and
            functional websites that provide great user experiences. Feel free
            to explore my projects and get in touch with me if you have any
            questions or opportunities for collaboration. */}
            {ABOUT_TEXT}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
