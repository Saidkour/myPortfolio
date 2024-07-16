import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { CONTACT } from "../constants";
import { FaXTwitter } from "react-icons/fa6";
import { useSelector } from "react-redux";

function Contact() {
  const dark = useSelector((state) => state.dark);
  return (
    <div className="py-[100px]">
      <hr className="sm:w-[600px] pt-[50px] mt-12 m-auto" />
      <div className=" px-5 container m-auto pb-10">
        <div className="text-center p-2">
          <h2 className="text-5xl pb-[60px]  opacity-85">Get in Touch</h2>
        </div>
        <div className="text-center tracking-tighter">
          <p className="my-4 ">{CONTACT.address}</p>
          <p className="my-4 ">{CONTACT.phoneNo}</p>
          <p>
            <a href="" className="border-b">
              {CONTACT.email}
            </a>
          </p>
        </div>
        <div className="flex m-auto gap-6 justify-center mt-2 p-2">
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
        </div>
      </div>
    </div>
  );
}

export default Contact;
