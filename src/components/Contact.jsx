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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline-block mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2.25c-3.728 0-6.75 3.022-6.75 6.75 0 4.5 6.75 12.75 6.75 12.75s6.75-8.25 6.75-12.75c0-3.728-3.022-6.75-6.75-6.75z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
              />
            </svg>
            {CONTACT.address}
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="my-4 "
          >
            <a href={`tel:${CONTACT.phoneNo}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-telephone-fill inline-block mr-2 w-6 h-6"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
              </svg>
              {CONTACT.phoneNo}
            </a>
          </motion.p>
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ x: 200, opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <a href={`mailto:${CONTACT.email}`} className="border-b">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-envelope-fill inline-block mr-2 w-6 h-6"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
              </svg>
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
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin
              className={`${
                !dark ? "hover:text-primary" : "hover:text-primary"
              } w-6 h-6`}
            />
          </a>
          <a
            href="https://www.github.com/saidkour"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub
              className={`${
                !dark ? "hover:text-primary" : "hover:text-primary"
              } w-6 h-6`}
            />
          </a>
          <a
            href="https://x.com/SKourbisse1"
            target="_blank"
            aria-label="Twitter"
          >
            <FaXTwitter
              className={`${
                !dark ? "hover:text-primary" : "hover:text-primary"
              } w-6 h-6`}
            />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~0165469fd1f9b609ff"
            target="_blank"
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
