import React from "react";

function Navbar() {
  return (
    <div className="w-full h-1/6 py-1/6 bg-orange-900 flex flex-row justify-between">
      <span className="text-3xl p-5 text-white">Vardaan Agarwal</span>
      <ul className="mt-5 text-white">
        <li className="p-3">
          <a href="/">About Me</a>
        </li>
        <li className="p-3">
          <a href="/">Skills</a>
        </li>
        <li className="p-3">
          <a href="/">Projects</a>
        </li>
        <li className="p-3">
          <a href="/">Blogs</a>
        </li>
        <li className="p-3">
          <a href="/">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
