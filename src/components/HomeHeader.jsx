import { useSelector } from "react-redux";
import img from "../assets/homeheader.webp";
import { HERO_CONTENT, HERO_CONTENT_FR } from "../constants/index";
import { useAnimation, motion } from "framer-motion";
import TypingAnimation from "./TypingAnimation";
function HomeHeader() {
  const dark = useSelector((state) => state.dark);
  const lang=useSelector((state)=>state.lang)
  const HERO_CONT = lang === "en" ? HERO_CONTENT : HERO_CONTENT_FR;
  return (
    <div>
      <div className="grid grid-cols-1 container m-auto  md:grid-cols-2  pt-[110px] pb-[100px]">
        <div className="p-4 ">
          <motion.h1
            initial={{ x: -600 }}
            animate={{ x: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            className="pb-2 text-5xl text-center md:text-left font-thin tracking-tight lg:mt-16 lg:text-7xl"
          >
            SAID KOURBISSE
          </motion.h1>

          <motion.p
            initial={{ y: 600 }}
            animate={{ y: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
            className="pt-4"
          >
            {HERO_CONT}
          </motion.p>
          <motion.h3
            initial={{ x: -600 }}
            animate={{ x: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="bg-gradient-to-r flex  from-pink-600 via-slate-400 to-primary bg-clip-text text-3xl md:text-4xl traking-tight text-transparent transition-all animate-bg duration-75 ease-out animate-pulse"
          >
            <TypingAnimation />
          </motion.h3>
          <div className="text-center md:text-left ">
            <motion.button
              initial={{ y: 600 }}
              animate={{
                y: 0,
                transition: { duration: 1, ease: "easeOut" },
              }}
              className="font-medium py-2 px-4 rounded-[50px] inline-flex hover:text-primary bg-primary hover:bg-transparent border border-primary items-center mt-7"
            >
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>
                <a
                  // href="../constants/said_kourbisseNeww.pdf"
                  // href="https://drive.google.com/file/d/11bnW9h1D1TXjdkt8Z2SWR9kdW-NwfJSB/view?usp=sharing"
                  href="https://drive.google.com/file/d/1avUa0Aoa20mM0MicWe4TULib6nF--8nw/view?usp=sharing"
                  target="_blank"
                  download="said_kourbisseNeww.pdf"
                >
                  Download CV
                </a>
              </span>
            </motion.button>
            <motion.button
              initial={{ y: 600 }}
              animate={{
                y: 0,
                transition: { duration: 1, ease: "easeOut" },
              }}
              className="font-medium ml-4 py-2 px-4 rounded-[50px] inline-flex hover:text-primary bg-primary hover:bg-transparent    border border-primary items-center mt-7"
            >
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13.5108 5.85343L17.5158 1.73642L19.8404 4.11701L15.6393 8.12199H21.5488V11.4268H15.6113L19.8404 15.5345L17.5158 17.8684L11.7744 12.099L6.03299 17.8684L3.70842 15.5438L7.93745 11.4361H2V8.12199H7.90944L3.70842 4.11701L6.03299 1.73642L10.038 5.85343V0H13.5108V5.85343ZM10.038 16.16H13.5108V24.0019H10.038V16.16Z" />
              </svg>
              <span>
                <a href="https://linktr.ee/saidkourbisse" target="_blank">
                  Get in touch
                </a>
              </span>
            </motion.button>
          </div>
        </div>
        <div className="flex justify-center m-auto">
          <div className="md:rounded-r-[40px]  overflow-hidden">
            <motion.img
              initial={{ y: 600 }}
              animate={{
                y: 0,
                transition: { duration: 0.9, ease: "easeInOut" },
              }}
              className="w-full h-full"
              src={img}
              alt="img-me"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
