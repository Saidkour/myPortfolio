import { useState } from "react";
import "./App.css";
import About from "./components/About";
import HomeHeader from "./components/HomeHeader";
import Navbar from "./components/Navbar";
import TechnologiesSection from "./components/TechnologiesSection";
import { useSelector } from "react-redux";
import EducationSection from "./components/EducationSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Test from "./components/Test";
function App() {
  const dark = useSelector((state) => state.dark);
  return (
    <>
      <div
        className={`relative ${
          dark ? "text-white" : "text-black"
        } transition-all  duration-100 ease-in-out`}
      >
        {/* {dark ? (
          <div className="absolute top-0 w-full h-full z-[-2]  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        ) : (
          <div className="absolute top-0 w-full h-full z-[-2]  bg-neutral-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        )} */}
        {/* <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}
        {!dark ? (
          <div className="absolute inset-0 -z-10 h-full w-full bg-white transition-all  duration-200 ease-out bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="absolute bottom-0 transition-all  duration-200 ease-out left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
          </div>
        ) : (
          <div className="absolute inset-0 -z-10 h-full w-full bg-black transition-all  duration-200 ease-out bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="absolute bottom-0 transition-all  duration-200 ease-out left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
          </div>
        )}
        <Navbar />
        <HomeHeader />
        <About />
        <TechnologiesSection />
        <EducationSection/> 
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
