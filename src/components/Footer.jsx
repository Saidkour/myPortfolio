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
          ©2024 Said Kourbisse. All rights reserved
        </motion.p>
        
      </footer>
    </>
  );
};

export default Footer;
