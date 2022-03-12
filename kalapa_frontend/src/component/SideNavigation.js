import React from "react";
import { FiHelpCircle } from "react-icons/fi";
import ladyConfuse from "../assets/lady_confused.svg";
import Content from "./Content";

function SideNavigation() {
  return (
    <>
      <div className="w-60 px-1 mx-32 mt-10 absolute">
        <div className="flex justify-center text-blue-900 bg-blue-100 p-4 rounded-lg my-10 space-x-2">
          <FiHelpCircle className="w-6 h-6" />
          <p className="text-lg font-extrabold">PUSAT BANTUAN</p>
        </div>
        <div className="flex flex-row w-72">
          <div className="h-fit shadow-md bg-white">
            <ul className="relative">
              <li className="relative">
                <a
                  className="flex items-center text-xs px-6 h-6 overflow-hidden text-blue-900 font-semibold whitespace-nowrap rounded hover:text-blue-900 hover:bg-blue-100 transition duration-300 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  Mulai Atur Toko
                </a>
              </li>
              <li className="relative">
                <a
                  className="flex items-center text-xs px-6 h-6 overflow-hidden text-blue-900 font-semibold whitespace-nowrap rounded hover:text-blue-900 hover:bg-blue-100 transition duration-300 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  Pertanyaan yang sering diajukan
                </a>
              </li>
              <li className="relative">
                <a
                  className="flex items-center text-xs px-6 h-6 overflow-hidden text-blue-900 font-semibold whitespace-nowrap rounded hover:text-blue-900 hover:bg-blue-100 transition duration-300 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  Kebijakan
                </a>
              </li>
              <img alt="avatar" src={ladyConfuse} className="mt-14 mx-4" />
            </ul>
          </div>
          <Content />
        </div>
      </div>
    </>
  );
}

export default SideNavigation;
