import "./App.css";
import About from "./components/About";
import HomeHeader from "./components/HomeHeader";
import Navbar from "./components/Navbar";
import TechnologiesSection from "./components/TechnologiesSection";
import { useSelector } from "react-redux";
import EducationSection from "./components/EducationSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjecteSction";
import AppParticals from "./components/AppParticals";
import ExperienceSection from "./components/ExperienceSection";
function App() {
  const dark = useSelector((state) => state.dark);

  return (
    <>
      <div
        className={`relative ${
          dark ? "text-white" : "text-black"
        } transition-all  duration-100 ease-in-out`}
      >
        {!dark ? (
          <div className="absolute inset-0 -z-10 h-full w-full bg-white transition-all  duration-200 ease-out bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="absolute bottom-0 transition-all  duration-200 ease-out left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
          </div>
        ) : (
          <div className="absolute inset-0 -z-10 h-full w-full bg-black transition-all  duration-200 ease-out bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="absolute bottom-0 transition-all  duration-200 ease-out left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
          </div>
        )}
        <div className="relative">
          <AppParticals />
          <Navbar />
          <HomeHeader />
        </div>
        <About />
        <TechnologiesSection />
        <ProjectSection />
        <ExperienceSection />
        <EducationSection />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
