import React from "react";
import manExplain from "../assets/man-explain.svg";
import { RiSearchEyeLine } from "react-icons/ri";
import { AiOutlineTag } from "react-icons/ai";
// import orangeElipse from "../assets/orange_elipse.svg";

function Content() {
  return (
    <>
      <div>
        <div className="mx-96">
          {/* <img
            alt="orange elipse"
            className="absolute object-bottom"
            src={orangeElipse}
          /> */}
          <img
            alt="avatar"
            className="absolute mx-96 top-8 w-40"
            src={manExplain}
          />
        </div>
        <div className="flex flex-row w-fit mx-10 text-blue-900 space-x-2 bg-blue-100 h-fit p-4 rounded-md mt-1">
          <RiSearchEyeLine className="h-10 w-10 stroke-blue-300" />
          <input className="border w-92 px-96 h-10 rounded-md" type="search" />
        </div>
        <div className="mx-12 my-4">
          <p className="font-bold text-blue-900">Mari Memulai</p>
        </div>
        <div className="flex flex-row text-sm mx-14 text-blue-900 font-semibold">
          <ul className="flex flex-row space-x-72 font-bold">
            <li className="flex flex-row">
              <span className="mt-1 mx-1">
                <AiOutlineTag />
              </span>
              Produk
            </li>
            <li className="flex flex-row">
              <span className="mt-1 mx-1">
                <AiOutlineTag />
              </span>
              Chat
            </li>
            <li className="flex flex-row">
              <span className="mt-1 mx-1">
                <AiOutlineTag />
              </span>
              Order
            </li>
          </ul>
        </div>
        <div className="mx-14 mt-4">
          <ul className="flex flex-row text-sm text-blue-400">
            <li className="w-80">
              <p>How can I change the owner of the my Support account?</p>
              <p>Where can I find answers to common billing questions?</p>
              <p>Where can I learn more aboout add-ons for my plan?</p>
              <p>Where can I learn more aboout add-ons for my plan?</p>
              <p>Where can I learn more aboout add-ons for my plan?</p>
              <p>Where can I learn more aboout add-ons for my plan?</p>
            </li>
            <li className="w-80 ml-10">
              <p>How can I change the owner of my Support account</p>
              <p>Where can I find answers to common billing questions?</p>
              <p>Where can I learn more aboout add-ons for my plan?</p>
            </li>
            <li className="w-80 ml-4">
              <p>How can I change the owner of my Support account</p>
              <p>Where can I find answers to common billing questions?</p>
              <p>Where can I learn more aboout add-ons for my plan?</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Content;
