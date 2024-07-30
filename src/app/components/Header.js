import React from "react";
import MenuItem from "./MenuItem";
import { FaHome, FaInfoCircle } from "react-icons/fa";
import Link from "next/link";
import DarkMode from "./DarkMode";

const Header = () => {
  return (
    <>
      <div className="flex justify-between max-w-6xl mt-3 font-semibold">
        <div className="flex lg:text-lg font-extrabold shadow-lg shadow-purple-400">
          <MenuItem title={"Home"} address={"/"} Icon={FaHome} />
          <MenuItem title={"About"} address={"/about"} Icon={FaInfoCircle} />
        </div>
        <div className="flex items-center space-x-5 mb-2 mt-1 mr-0">
          <DarkMode />
          <Link href="/">
            <h2 className="text-2xl">
              <span className="font-sans py-1 px-2 bg-purple-400 rounded-lg text-white">
                Movie
              </span>
              <span className=" font-sans hidden sm:inline">Mania</span>
            </h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
