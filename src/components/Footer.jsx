import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const dark = useSelector((state) => state.dark);
  return (
    <>
      <hr className="sm:w-[600px] m-auto"/>
      <footer
        className={`${dark ? "text-white" : "text-black"}   text-center p-4`}
      >
        <p>©2024 My Portfolio. All rights reserved.</p>
        <p>
          Designed by{" "}
          <span className="pb-2 font-thin tracking-tight uppercase">
            Said Kourbisse
          </span>
        </p>
      </footer>
    </>
  );
};

export default Footer;
