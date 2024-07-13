
import {
  SiExpress,
  SiLaravel,
  SiMongodb,
  SiNodedotjs,
  SiPhp,
  SiPostman,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import { useSelector } from "react-redux";

const TechnologiesSection = () => {
    const dark = useSelector(state => state.dark);
  return (
    <div className="pt-[100px] px-5 container m-auto">
      <div className="text-center p-2">
        <h2 className="text-5xl mb-20 opacity-85">Technologies</h2>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div
          className={`rounded-2xl border-4 ${
            dark ? "border-neutral-800" : "border-neutral-300"
          } p-4`}
        >
          <SiMongodb className="text-7xl text-green-500" />
        </div>{" "}
        <div
          className={`rounded-2xl border-4 ${
            dark ? "border-neutral-800" : "border-neutral-300"
          } p-4`}
        >
          <SiReact className="text-7xl text-blue-500" />
        </div>
        <div
          className={`rounded-2xl border-4 ${
            dark ? "border-neutral-800" : "border-neutral-300"
          } p-4`}
        >
          <SiExpress className="text-7xl text-black-500" />
        </div>
        <div
          className={`rounded-2xl border-4 ${
            dark ? "border-neutral-800" : "border-neutral-300"
          } p-4`}
        >
          <SiNodedotjs className="text-7xl text-green-500" />
        </div>
        <div
          className={`rounded-2xl border-4 ${
            dark ? "border-neutral-800" : "border-neutral-300"
          } p-4`}
        >
          <SiPhp className="text-7xl text-blue-500" />
        </div>{" "}
        <div
          className={`rounded-2xl border-4 ${
            dark ? "border-neutral-800" : "border-neutral-300"
          } p-4`}
        >
          <SiLaravel className="text-7xl text-red-500" />
        </div>
        <div
          className={`rounded-2xl border-4 ${
            dark ? "border-neutral-800" : "border-neutral-300"
          } p-4`}
        >
          <SiPostman className="text-7xl text-yellow-900" />
        </div>
        <div
          className={`rounded-2xl border-4 ${
            dark ? "border-neutral-800" : "border-neutral-300"
          } p-4`}
        >
          <SiTailwindcss className="text-7xl text-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default TechnologiesSection;
