import { useSelector } from "react-redux";
import img from "../assets/homeheader.webp";
import { HERO_CONTENT, HERO_CONTENT_FR } from "../constants/index";
import { useAnimation, motion } from "framer-motion";
import TypingAnimation from "./TypingAnimation";
import { Blurhash } from "react-blurhash";
import { useEffect, useState } from "react";
function HomeHeader() {
  const dark = useSelector((state) => state.dark);
  const lang = useSelector((state) => state.lang);
  const HERO_CONT = lang === "en" ? HERO_CONTENT : HERO_CONTENT_FR;
  const [imgLoaded, setImgLoaded] = useState(false);
  useEffect(() => {
    const imgElement = new Image();
    imgElement.src = img;
    imgElement.onload = () => {
      console.log("loaded");
      setImgLoaded(true);
    };
  }, [img]);
  const texts = {
    en: {
      downloadCV: "Download CV",
      getInTouch: "Get in touch"
    },
    fr: {
      downloadCV: "Télécharger CV",
      getInTouch: "Entrer en contact"
    },
  };
  return (
    <div>
      <div className="grid grid-cols-1 container m-auto  md:grid-cols-2 pt-[110px] pb-[100px]">
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
            className="bg-gradient-to-r flex  from-pink-600 via-slate-400 to-primary bg-clip-text text-3xl md:text-4xl traking-tight text-transparent transition-all animate-bg duration-75 ease-out animate-pulse"
          >
            <TypingAnimation />
          </motion.h2>
          <div className="text-center md:text-left">
            <motion.button
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -150, opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="font-medium py-2 px-4 rounded-[50px] inline-flex hover:text-primary bg-primary hover:bg-transparent border border-primary items-center mt-7"
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
                  href="https://drive.google.com/file/d/1avUa0Aoa20mM0MicWe4TULib6nF--8nw/view?usp=sharing"
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
              className="font-medium ml-4 py-2 px-4 rounded-[50px] inline-flex hover:text-primary bg-primary hover:bg-transparent border border-primary items-center mt-7"
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
            {imgLoaded ? (
              <img
                className="w-full h-full"
                src={img}
                loading="lazy"
                alt="img-me"
              />
            ) : (
              <div className=" max-w-[400px] md:max-w-max flex m-auto  overflow-x-hidden">
                <Blurhash
                  hash="LF7BsC?w%NxuE2I9ITM{tPovtRn#"
                  width={640}
                  height={426.66}
                  resolutionX={32}
                  resolutionY={32}
                />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
