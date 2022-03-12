import React from "react";

function Navigation() {
  return (
    <>
      <div className="flex justify-around flex-row bg-slate-100 p-4 w-screen">
        <p className="text-blue-600">
          AIO <span className="font-bold">DESIGN</span>
        </p>
        <ul className="flex flex-row space-x-10 text-blue-700 text-sm font-semibold">
          <li>
            <p className="bg-white px-6 py-1 rounded-full">Masuk</p>
          </li>
          <li>
            <p className="bg-yellow-400 px-6 py-1 rounded-full">Gabung</p>
          </li>
          <li>
            <p>Bantuan</p>
          </li>
          <li>
            <p>Harga</p>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
