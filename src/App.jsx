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
import ProjectsSection from "./components/ProjectsSection";
function App() {
  const dark = useSelector((state) => state.dark);

  return (
    <>
      <div
        className={`relative ${
          dark ? "text-white" : "text-black"
        } transition-all  duration-150 ease-in-out`}
      >
        {!dark ? (
          <div className="absolute inset-0 -z-10 h-full w-full bg-white transition-all  duration-150 ease-in-out bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:2rem_2rem]">
            <div className="absolute bottom-0 transition-all   duration-150 ease-in-out left-0 right-0 top-0 bg-[radial-gradient(circle_400px_at_100%_100px,#845ec2,transparent)] md:bg-[radial-gradient(circle_800px_at_100%_100px,#845ec2,transparent)]"></div>
          </div>
        ) : (
          <div className="absolute inset-0 -z-10 h-full w-full bg-black transition-all  duration-150 ease-in-out bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:2rem_2rem]">
            <div className="absolute bottom-0 transition-all  duration-150 ease-in-out left-0 right-0 top-0 bg-[radial-gradient(circle_400px_at_100%_100px,#845ec2,transparent)] md:bg-[radial-gradient(circle_800px_at_100%_100px,#845ec2,transparent)]"></div>
          </div>
        )}
        <div className="relative">
          <AppParticals />
          <Navbar />
          <HomeHeader />
          <About />
        </div>
        <TechnologiesSection />
        {/* <ProjectSection /> */}
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
