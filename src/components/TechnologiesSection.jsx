import {
  SiAzuredevops,
  SiBootstrap,
  SiCsharp,
  SiCss3,
  SiDocker,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostman,
  SiPython,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
const TechnologiesSection = () => {
  const dark = useSelector((state) => state.dark);
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <div className="my-5">
      <div className=" px-5 container m-auto">
        <div className="text-center p-2">
          <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-5xl mb-20 opacity-85"
          >
            Technologies
          </motion.h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {[
            { icon: <SiHtml5 className="text-7xl text-red-500" />, duration: 2.5 },
            { icon: <SiCss3 className="text-7xl text-blue-500" />, duration: 2.5 },
            { icon: <SiJavascript className="text-7xl text-yellow-500" />, duration: 2.5 },
            { icon: <SiTypescript className="text-7xl text-blue-500" />, duration: 2.5 },
            { icon: <SiMongodb className="text-7xl text-green-500" />, duration: 2.5 },
            { icon: <SiReact className="text-7xl text-blue-500" />, duration: 4 },
            { icon: <SiRedux className="text-7xl text-primary" />, duration: 4 },
            { icon: <SiExpress className="text-7xl text-black-500" />, duration: 2.5 },
            { icon: <SiNodedotjs className="text-7xl text-green-600" />, duration: 4 },
            { icon: <SiNextdotjs className="text-7xl text-white-600" />, duration: 4 },
            { icon: <SiTailwindcss className="text-7xl text-blue-500" />, duration: 4 },
            { icon: <SiBootstrap className="text-7xl text-purple-900" />, duration: 4 },
            { icon: <SiPhp className="text-7xl text-blue-500" />, duration: 2.5 },
            { icon: <SiLaravel className="text-7xl text-red-500" />, duration: 4 },
            { icon: <SiMysql className="text-7xl text-blue-500" />, duration: 4 },
            { icon: <SiPython className="text-7xl text-blue-500" />, duration: 4 },
            { icon: <SiCsharp className="text-7xl text-blue-500" />, duration: 4 },
            { icon: <SiPostman className="text-7xl text-yellow-700" />, duration: 2.5 },
            { icon: <SiGit className="text-7xl text-red-500" />, duration: 2.5 },
            { icon: <SiJira className="text-7xl text-blue-500" />, duration: 4 },
            { icon: <SiDocker className="text-7xl text-blue-500" />, duration: 4 },
            { icon: <SiAzuredevops className="text-7xl text-blue-500" />, duration: 4 },
          ].map((tech, index) => (
            <motion.div
              key={index}
              variants={iconVariants(tech.duration)}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.2, rotate: 10 }}
              className={`rounded-2xl cursor-pointer border-4 ${
                dark ? "border-neutral-800" : "border-neutral-300"
              } p-4`}
            >
              {tech.icon}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologiesSection;
