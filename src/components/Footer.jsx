import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Footer = () => {
  const dark = useSelector((state) => state.dark);
  return (
    <>
     
      <footer
        className={`${
          dark ? "text-white" : "text-black"
        }  backdrop-blur-sm shadow-md shadow-white text-center p-4`}
      >
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          ©2024 My Portfolio. All rights reserved.
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          Designed by{" "}
          <span className="pb-2 font-thin tracking-tight uppercase">
            Said Kourbisse
          </span>
        </motion.p>
      </footer>
    </>
  );
};

export default Footer;
