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
import { Link } from "react-router-dom";
import { TOGGLE_DARK, TOGGLE_LANG } from "../redux/actionType";

const NavBar = () => {
  const dark = useSelector((state) => state.dark);
  const lang = useSelector((state) => state.lang);
  const dispatch = useDispatch();
  return (
    <>
      <nav
        className={`py-5 px-10 shadow-lg mt-2 sm:mt-0  backdrop-filter backdrop-blur-lg transition-opacity opacity-100  h-[72px] fixed z-[999] top-0 left-0 w-full `}
      >
        <div className="container mx-auto flex justify-between sm:flex-row relative sm:justify-between ">
          <Link to="/" className=" w-fit font-bold flex my-auto">
            <h2 className="text-3xl text-primary">SK</h2>
          </Link>

          <div className="flex justify-evenly min-w-[250px] my-auto sm:justify-between sm:p-2">
            <a
              href="https://www.linkedin.com/in/said-kourbisse-aa0386164/"
              target="_blanck"
            >
              <FaLinkedin className={`hover:text-primary w-6 h-6`} />
            </a>
            <a href="https://www.github.com/saidkour" target="_blanck">
              <FaGithub className={`hover:text-primary w-6 h-6`} />
            </a>
            <a href="https://x.com/SKourbisse1" target="_blanck">
              <FaXTwitter className={`hover:text-primary w-6 h-6`} />
            </a>
            <a href="https://www.upwork.com/freelancers/~0165469fd1f9b609ff" target="_blanck">
              <FaUpwork className={` w-6 h-6 hover:text-primary`} />
            </a>
            <span
              onClick={() => dispatch({ type: TOGGLE_DARK })}
              className={`text-center hidden sm:block border-l pl-4 cursor-pointer ${
                !dark && "border-black"
              }`}
            >
              {dark ? (
                <TiWeatherSunny className={`hover:text-primary w-6 h-6`} />
              ) : (
                <IoMdMoon className="hover:text-primary w-6 h-6" />
              )}
            </span>
            <span
              onClick={() => dispatch({ type: TOGGLE_LANG })}
              className="text-red hidden sm:block cursor-pointer hover:text-primary"
            >
              {lang === "en" ? "EN" : "FR"}
            </span>
          </div>
          <div className="flex my-auto sm:hidden">
            <span
              onClick={() => dispatch({ type: TOGGLE_DARK })}
              className={`text-center flex border-l pl-4 cursor-pointer ${
                !dark && "border-black"
              }`}
            >
              {dark ? (
                <TiWeatherSunny className={` w-6 h-6 hover:text-primary`} />
              ) : (
                <IoMdMoon className=" w-6 h-6 hover:text-primary" />
              )}
            </span>
            <span
              onClick={() => dispatch({ type: TOGGLE_LANG })}
              className="cursor-pointer ml-2 block my-auto sm:hidden hover:text-primary"
            >
              {lang === "en" ? "EN" : "FR"}
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
