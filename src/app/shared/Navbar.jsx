"use client";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";

import React from "react";
const Navbar = () => {
  const pathname = usePathname();

  return (
    <div>
      {/* for mobile */}
      <div
        name="menu"
        className="border md:text-2xl md:hidden list-none flex uppercase text-sm gap-2 justify-between px-2 py-[1px] border-gray-100 rounded-sm"
      >
        Welcome to arthalap
      </div>
      {/* for pc */}
      <div className="list-none hidden  text-xl uppercase md:flex items-center justify-center mr-auto gap-2">
        <Link
          href="/"
          className={`${pathname == "/" ? " border-2 border-blue-400 bg-gray-200 rounded" : " hover:border-b-[3px]"}  px-2 `}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`${pathname == "/about" ? " border-2 border-blue-400 bg-gray-200 rounded" : " hover:border-b-[3px]"}  px-2 `}
        >
          About
        </Link>
        <Link
          href="/writers"
          className={`${pathname == "/writers" ? " border-2 border-blue-400 bg-gray-200 rounded" : " hover:border-b-[3px]"}  px-2 `}
        >
          Writers
        </Link>
        <Link
          href="/blogs"
          className={`${pathname == "/blogs" ? " border-2 border-blue-400 bg-gray-200 rounded" : " hover:border-b-[3px]"}  px-2 `}
        >
          Blogs
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
