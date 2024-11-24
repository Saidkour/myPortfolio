import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRegMoon,
  FaRegSun,
} from "react-icons/fa";
import { FaUpwork, FaXTwitter } from "react-icons/fa6";
import { IoMdMoon } from "react-icons/io";
import { TiWeatherSunny } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_DARK, TOGGLE_LANG } from "../redux/actionType";
import logowhite from "../assets/whitlogo.webm";
import logoblack from "../assets/mylogo.webm";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
const NavBar = () => {
  const dark = useSelector((state) => state.dark);
  const lang = useSelector((state) => state.lang);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navbarBg, setNavbarBg] = useState("bg-transparent");
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleScroll = useCallback(() => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        setNavbarBg("backdrop-blur-md shadow-lg");
      } else {
        setNavbarBg("bg-transparent");
      }
      setLastScrollY(currentScrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);
  return (
    <>
      <div className="container">
        <nav
          className={`py-5 px-10 mt-2 sm:mt-0 rounded-3xl md:rounded-none ${navbarBg}  transition-opacity opacity-100  h-[72px] fixed z-[999] top-0 left-0 w-full `}
        >
          <div className="container mx-auto flex justify-between  relative ">
            <a href="/">
              {/* <img
                width={40}
                height={40}
                src={`${dark ? logoblack : logowhite}`}
                alt={`${dark ? "logo black" : "logo white"}`}
              /> */}
              <video
                src={`${dark ? logoblack : logowhite}`}
                type="video/webm"
                className="w-[40px] h-[40px]"
                autoPlay
                loop
                muted
              ></video>
            </a>
            <div className="hidden md:flex justify-evenly  min-w-[250px] my-auto sm:justify-between sm:p-2">
              <a
                href="https://www.linkedin.com/in/said-kourbisse-aa0386164/"
                target="_blanck"
                aria-label="LinkedIn"
              >
                <FaLinkedin className={`md:hover:text-primary w-6 h-6`} />
              </a>
              <a
                href="https://www.github.com/saidkour"
                target="_blanck"
                aria-label="GitHub"
              >
                <FaGithub className={`md:hover:text-primary w-6 h-6`} />
              </a>
              <a
                href="https://x.com/SKourbisse1"
                target="_blanck"
                aria-label="Twitter"
              >
                <FaXTwitter className={`md:hover:text-primary w-6 h-6`} />
              </a>
              <a
                href="https://www.upwork.com/freelancers/~0165469fd1f9b609ff"
                target="_blanck"
                aria-label="Upwork"
              >
                <FaUpwork className={` w-6 h-6 md:hover:text-primary`} />
              </a>
              <span
                onClick={() => dispatch({ type: TOGGLE_DARK })}
                className={`text-center hidden sm:block border-l pl-4 cursor-pointer ${
                  !dark && "border-black"
                }`}
              >
                {dark ? (
                  <TiWeatherSunny className={`md:hover:text-primary w-6 h-6`} />
                ) : (
                  <IoMdMoon className="md:hover:text-primary w-6 h-6" />
                )}
              </span>
              <span
                onClick={() => dispatch({ type: TOGGLE_LANG })}
                className="text-red hidden sm:block cursor-pointer md:hover:text-primary"
              >
                {lang === "en" ? "FR" : "EN"}
              </span>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-900 focus:outline-none duration-150 ease-in-out "
                aria-label="Ouvrir le menu"
              >
                {isOpen ? (
                  <svg
                    className={`${
                      !dark ? "text-black" : "text-white"
                    } w-7 h-7 `}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className={`${!dark ? "text-black" : "text-white"} w-7 h-7`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
            {isOpen ? (
              <div className="absolute md:hidden top-[52px] right-0 flex justify-end bg-gray-400 opacity-90 duration-200 ease-out  rounded-lg ">
                <div className=" ">
                  <ul className="flex flex-col space-y-4 p-5">
                    <motion.a
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, ease: "backOut" }}
                      href="https://www.linkedin.com/in/said-kourbisse-aa0386164/"
                      target="_blanck"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin
                        className={`md:hover:text-primary m-auto opacity-100 w-6 h-6`}
                      />
                    </motion.a>
                    <motion.a
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, ease: "backOut" }}
                      href="https://www.github.com/saidkour"
                      target="_blanck"
                      aria-label="GitHub"
                    >
                      <FaGithub
                        className={`md:hover:text-primary  m-auto w-6 h-6`}
                      />
                    </motion.a>
                    <motion.a
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.7, ease: "backOut" }}
                      href="https://x.com/SKourbisse1"
                      target="_blanck"
                      aria-label="Twitter"
                    >
                      <FaXTwitter
                        className={`md:hover:text-primary m-auto w-6 h-6`}
                      />
                    </motion.a>
                    <motion.a
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: "backOut" }}
                      href="https://www.upwork.com/freelancers/~0165469fd1f9b609ff"
                      target="_blanck"
                      aria-label="Upwork"
                    >
                      <FaUpwork
                        className={` w-6 h-6 md:hover:text-primary m-auto`}
                      />
                    </motion.a>
                    <div className="flex ">
                      <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "backOut" }}
                        onClick={() => dispatch({ type: TOGGLE_DARK })}
                        className={`text-center  border-r pr-2 cursor-pointer ${
                          !dark && "border-black"
                        }`}
                      >
                        {dark ? (
                          <TiWeatherSunny
                            className={`md:hover:text-primary w-6 h-6`}
                          />
                        ) : (
                          <IoMdMoon className="md:hover:text-primary w-6 h-6" />
                        )}
                      </motion.span>
                      <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: "backOut" }}
                        onClick={() => dispatch({ type: TOGGLE_LANG })}
                        className="text-red pl-2 cursor-pointer md:hover:text-primary"
                      >
                        {lang === "en" ? "FR" : "EN"}
                      </motion.span>
                    </div>
                  </ul>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
