import React from "react";
import { Education } from "../constants";

function EducationSection() {
  return (
    <>
      <hr className="sm:w-[600px] pt-[100px] mt-20 m-auto" />
      <div className=" px-5 container m-auto">
        <div className="text-center p-2">
          <h2 className="text-5xl mb-20  opacity-85">Education</h2>
        </div>
        <div className="pt-5">
          {Education.map((edu, index) => (
            <div key={index} className="grid grid-cols-1  sm:grid-cols-6  p-4">
              <div className="flex justify-center sm:col-span-2 mb-4 sm:m-auto backdrop-filter backdrop-blur-lg">
                <p className="text-xl p-2">{edu.year}</p>
              </div>
              <div className="sm:col-span-4 backdrop-filter backdrop-blur-lg">
                <h3 className="text-4xl font-semi-bold mb-4">{edu.title}</h3>
                <h4 className="text-2xl font-semi-bold opacity-70 mb-4">
                  {edu.institution}
                </h4>
                <p className=" text-xl font-semi-bold opacity-75">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default EducationSection;
