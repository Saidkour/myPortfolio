import "./App.css";
import { useSelector } from "react-redux";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import HomeHeader from "./components/HomeHeader";
import About from "./components/About";
import AppParticals from "./components/AppParticals";

const TechnologiesSection = lazy(() =>
  import("./components/TechnologiesSection")
);
const ProjectsSection = lazy(() => import("./components/ProjectsSection"));
const ExperienceSection = lazy(() => import("./components/ExperienceSection"));
const EducationSection = lazy(() => import("./components/EducationSection"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  const dark = useSelector((state) => state.dark);
  return (
    <>
      <div
        className={`relative ${
          dark ? "text-white" : "text-black"
        } transition-all duration-150 ease-in-out`}
      >
        {!dark ? (
          <div className="absolute inset-0 -z-10 h-full w-full bg-white transition-all duration-150 ease-in-out bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:2rem_2rem] animate-gradient">
            <div className="absolute bottom-0 transition-all duration-150 ease-in-out left-0 right-0 top-0 bg-[radial-gradient(circle_400px_at_100%_100px,#845ec2,transparent)] md:bg-[radial-gradient(circle_800px_at_100%_100px,#845ec2,transparent)]"></div>
          </div>
        ) : (
          <div className="absolute inset-0 -z-10 h-full w-full bg-black transition-all duration-150 ease-in-out bg-[linear-gradient(to_right,#0f0f0f_1px,transparent_1px),linear-gradient(to_bottom,#0f0f0f_1px,transparent_1px)] bg-[size:2rem_2rem] animate-gradient">
            <div className="absolute bottom-0 transition-all duration-150 ease-in-out left-0 right-0 top-0 bg-[radial-gradient(circle_400px_at_100%_100px,#845ec2,transparent)] md:bg-[radial-gradient(circle_800px_at_100%_100px,#845ec2,transparent)]"></div>
          </div>
        )}
        <div className="relative">
          <AppParticals />
          <Navbar />
          <HomeHeader />
          <About />
        </div>
        <Suspense
          fallback={
            <div
              role="status"
              className="space-y-2.5 animate-pulse max-w-lg w-[90%] flex flex-col m-auto mt-50"
            >
              <div className="flex items-center w-full">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              </div>
              <div className="flex items-center w-full max-w-[480px]">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
              </div>
              <div className="flex items-center w-full max-w-[400px]">
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              </div>
              <div className="flex items-center w-full max-w-[480px]">
                <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
              </div>
              <div className="flex items-center w-full max-w-[440px]">
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
              </div>
              <div className="flex items-center w-full max-w-[360px]">
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
          }
        >
          <TechnologiesSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default App;
