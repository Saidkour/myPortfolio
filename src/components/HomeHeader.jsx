import { useSelector } from "react-redux";
import img from "../assets/homeheader.webp";
import { CONSTANTS } from "../constants/index";
import { motion } from "framer-motion";
import TypingAnimation from "./TypingAnimation";
function HomeHeader() {
  const lang = useSelector((state) => state.lang);
  const HERO_CONT =
    lang === "en" ? CONSTANTS.HERO_CONTENT : CONSTANTS.HERO_CONTENT_FR;
  const cv =
    lang == "en"
      ? "https://drive.google.com/file/d/1ka9WSEOubbnAg8cIE_kPkLN3AuaEWJAA/view?usp=sharing"
      : "https://drive.google.com/file/d/1ermlkwv4TYoasW755O0mQ0XRdb6N-w9v/view?usp=sharing";
  const texts = {
    en: {
      downloadCV: "Download CV | EN",
      getInTouch: "Get in touch",
    },
    fr: {
      downloadCV: "Télécharger CV | FR",
      getInTouch: "Entrer en contact",
    },
  };
  return (
    <div>
      <div className="grid grid-cols-1 container m-auto md:grid-cols-2 pt-[110px] pb-[100px]">
        <div className="py-4 px-4 sm:px-4 overflow-hidden">
          <motion.h1
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="pb-2 text-5xl text-center md:text-left font-thin tracking-tight lg:mt-16 lg:text-7xl"
          >
            SAID KOURBISSE
          </motion.h1>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="pt-4"
          >
            {HERO_CONT}
          </motion.p>
          <motion.h2
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="bg-gradient-to-r flex from-pink-600 via-sky-950 bg-clip-text text-2xl md:text-4xl traking-tight text-transparent transition-all animate-bg duration-75 ease-out animate-pulse"
          >
            <TypingAnimation />
          </motion.h2>
          <div className="text-center md:text-left">
            <motion.button
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -150, opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="font-medium text-sm py-2 px-3 rounded-[50px] inline-flex hover:text-primary bg-primary  hover:bg-transparent border border-primary items-center mt-7"
              aria-label="Download Said Kourbisse's CV"
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
                  href={cv}
                  target="_blank"
                  download="said_kourbisseNeww.pdf"
                  aria-label="Download Said Kourbisse's CV"
                >
                  {texts[lang].downloadCV}
                </a>
              </span>
            </motion.button>
            <motion.button
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="font-medium text-sm ml-2 py-2 px-3 rounded-[50px] inline-flex hover:text-primary bg-primary hover:bg-transparent border border-primary items-center mt-7"
              aria-label="Contact Said Kourbisse"
            >
              <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13.5108 5.85343L17.5158 1.73642L19.8404 4.11701L15.6393 8.12199H21.5488V11.4268H15.6113L19.8404 15.5345L17.5158 17.8684L11.7744 12.099L6.03299 17.8684L3.70842 15.5438L7.93745 11.4361H2V8.12199H7.90944L3.70842 4.11701L6.03299 1.73642L10.038 5.85343V0H13.5108V5.85343ZM10.038 16.16H13.5108V24.0019H10.038V16.16Z" />
              </svg>
              <span>
                <a
                  href="https://linktr.ee/saidkourbisse"
                  target="_blank"
                  aria-label="Contact Said Kourbisse"
                >
                  {texts[lang].getInTouch}
                </a>
              </span>
            </motion.button>
          </div>
        </div>
        <div className="m-auto mt-8 md:mt-0 overflow-hidden">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: 200, opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="md:rounded-r-[40px] overflow-hidden"
          >
            <img
              loading="lazy"
              width={640}
              height={426.66}
              src={img}
              alt="img-me"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
export default HomeHeader;
