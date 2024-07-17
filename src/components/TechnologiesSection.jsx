import { motion } from "framer-motion";
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
    <div div className="my-5">
      <hr className="sm:w-[600px] pt-[50px] mt-10 m-auto" />
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
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className={`rounded-2xl border-4 ${
              dark ? "border-neutral-800" : "border-neutral-300"
            } p-4`}
          >
            <SiMongodb className="text-7xl text-green-500" />
          </motion.div>
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className={`rounded-2xl border-4 ${
              dark ? "border-neutral-800" : "border-neutral-300"
            } p-4`}
          >
            <SiReact className="text-7xl text-blue-500" />
          </motion.div>
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className={`rounded-2xl border-4 ${
              dark ? "border-neutral-800" : "border-neutral-300"
            } p-4`}
          >
            <SiExpress className="text-7xl text-black-500" />
          </motion.div>
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className={`rounded-2xl border-4 ${
              dark ? "border-neutral-800" : "border-neutral-300"
            } p-4`}
          >
            <SiNodedotjs className="text-7xl text-green-500" />
          </motion.div>
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className={`rounded-2xl border-4 ${
              dark ? "border-neutral-800" : "border-neutral-300"
            } p-4`}
          >
            <SiPhp className="text-7xl text-blue-500" />
          </motion.div>{" "}
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className={`rounded-2xl border-4 ${
              dark ? "border-neutral-800" : "border-neutral-300"
            } p-4`}
          >
            <SiLaravel className="text-7xl text-red-500" />
          </motion.div>
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className={`rounded-2xl border-4 ${
              dark ? "border-neutral-800" : "border-neutral-300"
            } p-4`}
          >
            <SiPostman className="text-7xl text-yellow-900" />
          </motion.div>
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className={`rounded-2xl border-4 ${
              dark ? "border-neutral-800" : "border-neutral-300"
            } p-4`}
          >
            <SiTailwindcss className="text-7xl text-blue-500" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesSection;
