import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-slate-800">
      <div className="container flex justify-between pt-5 pb-2 px-10">
        <Link className="text-white font-bold text-xl no-underline" href="#">
          LOGO
        </Link>

        <ul className="flex space-x-4 text-white list-none">
          <li>
            <Link className="no-underline" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="no-underline" href="/tasks">
              Tasks
            </Link>
          </li>
          <li>
            <Link className="no-underline" href="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
