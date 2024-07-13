import { useSelector } from "react-redux";
import img from "../assets/kevinRushProfile.png";
import { HERO_CONTENT } from "../constants/index";
function HomeHeader() {
  const dark = useSelector((state) => state.dark);
  return (
    <>
      <div className="grid grid-cols-1 container m-auto  sm:grid-cols-2 p-3 pt-[110px] pb-[100px]">
        <div className="p-4 ">
          <h1 className="pb-5 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
            SAID KOURBISSE
          </h1>
          <h3 className="bg-gradient-to-r  from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl traking-tight text-transparent transition-all animate-bg duration-75 ease-out animate-pulse">
            Full Stack Developer
          </h3>
          <p className="pt-4">{HERO_CONTENT}</p>
          <button
            class={`mt-7 ${
              dark
                ? "bg-gray-300 hover:bg-gray-400 text-gray-800"
                : "bg-gray-900 hover:bg-gray-900 text-gray-200"
            }  font-bold py-2 px-4 rounded inline-flex items-center`}
          >
            <svg
              class="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>
              <a
                href="../constants/said_kourbisseNeww.pdf"
                download="said_kourbisseNeww.pdf"
              >
                Download CV
              </a>
            </span>
          </button>
          {/* <button
            className={`border rounded-md   mt-7 p-2 ${
              dark ? "border-white" : "border-black"
            }`}
          >
            <a
              href="../constants/said_kourbisseNeww.pdf"
              download="said_kourbisseNeww.pdf"
            >
              Download my CV
            </a>
          </button> */}
        </div>
        <div className="flex justify-center m-auto">
          <img className="w-[400px] " src={img} alt="img-me" />
        </div>
      </div>
    </>
  );
}

export default HomeHeader;
