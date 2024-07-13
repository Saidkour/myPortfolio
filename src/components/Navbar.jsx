import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRegMoon,
  FaRegSun,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMoon } from "react-icons/io";
import { TiWeatherSunny } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TOGGLE_DARK } from "../redux/actionType";

const NavBar = () => {
  const dark = useSelector((state) => state.dark);
  const dispatch = useDispatch();
  return (
    <>
      <nav
        className={`py-5 px-10 shadow-lg backdrop-filter backdrop-blur-lg transition-opacity opacity-100  h-[72px] fixed z-[999] top-0 left-0 w-full`}
      >
        <div className="container  mx-auto flex  flex-col md:flex-row justify-start relative md:justify-between ">
          <Link to="/" className=" w-fit font-bold flex my-auto">
            <h2 className="text-3xl ">SK</h2>
          </Link>

          <div className="flex min-w-[250px] justify-between p-2">
            <a
              href="https://www.linkedin.com/in/said-kourbisse-aa0386164/"
              target="_blanck"
            >
              <FaLinkedin
                className={`${
                  !dark ? "hover:opacity-50" : "hover:opacity-50"
                } w-6 h-6`}
              />
            </a>
            <a href="https://www.github.com/saidkour" target="_blanck">
              <FaGithub
                className={`${
                  !dark ? "hover:opacity-50" : "hover:opacity-50"
                } w-6 h-6`}
              />
            </a>
            <a href="https://x.com/SKourbisse1" target="_blanck">
              <FaXTwitter
                className={`${
                  !dark ? "hover:opacity-50" : "hover:opacity-50"
                } w-6 h-6`}
              />
            </a>
            <a href="https://www.facebook.com" target="_blanck">
              <FaFacebook
                className={`${
                  !dark ? "hover:opacity-50" : "hover:opacity-50"
                } w-6 h-6`}
              />
            </a>
            <span
              onClick={() => dispatch({ type: TOGGLE_DARK })}
              className={`text-center border-l pl-4 cursor-pointer ${!dark && "border-black"}`}
            >
              {dark ? (
                <TiWeatherSunny className={`hover:opacity-30 w-6 h-6`} />
              ) : (
                <IoMdMoon className="hover:opacity-30 w-6 h-6" />
              )}
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
