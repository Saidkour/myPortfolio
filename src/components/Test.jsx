import { useScroll, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Test = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Ensures the animation only triggers once
  });
  return (
    <motion.div
      ref={ref} 
      className="text-center font-bold"
      initial={{ x: -600 }}
      animate={inView ? { x: 0 } : { x: -900 }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
    >
      Your Content Here
    </motion.div>
  );
};
export default Test;
