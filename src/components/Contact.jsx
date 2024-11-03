import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { CONSTANTS } from "../constants/index";
import { FaUpwork, FaXTwitter } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

function Contact() {
  const dark = useSelector((state) => state.dark);
  const CONTACT = CONSTANTS.CONTACT;
  return (
    <div className="py-[100px]">
      <div className=" px-5 container m-auto pb-10">
        <div className="text-center p-2">
          <motion.h2
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-5xl pb-[60px]  opacity-85"
          >
            Get in Touch
          </motion.h2>
        </div>
        <div className="text-center overflow-hidden tracking-tighter">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="my-4 "
          >
            {CONTACT.address}
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="my-4 "
          >
            {CONTACT.phoneNo}
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: 200, opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <a href={`mailto:${CONTACT.email}`} className="border-b">
              {CONTACT.email}
            </a>
          </motion.p>
        </div>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ y: 200, opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex m-auto gap-6 justify-center mt-2 p-2"
        >
          <a
            href="https://www.linkedin.com/in/said-kourbisse-aa0386164/"
            target="_blanck"
            aria-label="LinkedIn"
          >
            <FaLinkedin
              className={`${
                !dark ? "hover:text-primary" : "hover:text-primary"
              } w-6 h-6`}
            />
          </a>
          <a href="https://www.github.com/saidkour" target="_blanck" aria-label="GitHub">
            <FaGithub
              className={`${
                !dark ? "hover:text-primary" : "hover:text-primary"
              } w-6 h-6`}
            />
          </a>
          <a href="https://x.com/SKourbisse1" target="_blanck" aria-label="Twitter">
            <FaXTwitter
              className={`${
                !dark ? "hover:text-primary" : "hover:text-primary"
              } w-6 h-6`}
            />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~0165469fd1f9b609ff"
            target="_blanck"
            aria-label="Upwork"
          >
            <FaUpwork className={` w-6 h-6 md:hover:text-primary`} />
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
