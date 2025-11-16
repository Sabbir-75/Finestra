"use client";
import { FiHome } from "react-icons/fi";
import React from "react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/navigation-menu";
import logo from "../../../../public/logo.png"
import Image from "next/image";
import Link from "next/link";
import { MdOutlineLogin } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi";



function DesktopMenu() {
  return (
    <Menubar className="bg-[#0B0B0B] py-[22px] px-1 rounded-full shadow-none border-black">
      <MenubarMenu>
        <MenubarTrigger><FiHome className="mr-1" /> Home</MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>About Us</MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Reviews</MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Procedures</MenubarTrigger>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger>Blog</MenubarTrigger>
      </MenubarMenu>

    </Menubar>
  );
}


const Navbar = () => {
  return (
    <div className="navbar shadow-sm px-1 md:px-3 lg:px-5">
      {/* LEFT */}
      <div className="navbar-start">

        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn mr-1 btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>

          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>

        <div className="flex gap-2 items-center">
          <Image
            src={logo}
            alt="My Picture"
            width={51}
            height={41}
            className=" w-10 h-8 lg:w-14 lg:h-11 rounded-lg"
          />
          <h1 className="text-[17px] lg:text-[22px] text-popover font-semibold">Finestra</h1>
        </div>
      </div>


      <div className="navbar-center hidden lg:flex">
        <DesktopMenu />
      </div>





      <div className="navbar-end flex items-center  gap-2  md:gap-3 lg:gap-6">

        <label className="toggle text-base-content">
          <input type="checkbox" />
          <svg aria-label="enabled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
            
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="4"
              fill="none"
              stroke="currentColor"
            >
              <path d="M20 6 9 17l-5-5"></path>
            </g>
          </svg>
          <svg
          className="w-6 h-6"
            aria-label="disabled"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </label>

        <div className="flex items-center gap-1 lg:gap-2">
          <IoPersonCircleSharp  className="text-2xl lg:text-3xl"/>
          <div className="flex items-center gap-0.5 lg:gap-1.5">
            <h1 className="text-xs lg:text-base font-normal">+pro</h1>
            <HiOutlineCurrencyDollar />
          </div>
        </div>
        <Link href={"/"} className="relative border-2 border-popover-foreground inline-flex items-center rounded-full justify-center px-2 py-2 md:px-3 md:py-2 lg:px-[22px] lg:py-2.5 overflow-hidden font-mono font-medium tracking-tighter text-popover group">
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-primary rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="group-hover:text-[#FFFFFF] relative flex text-xs duration-100 lg:text-base font-semibold items-center gap-1 lg:gap-2">
            <MdOutlineLogin /> Sign In
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
