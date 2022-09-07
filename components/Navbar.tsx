import Link from "next/link";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavbarData, SocialData } from "../constants";
import Favicon from "../public/favicon.svg";
import Image from "next/image";
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  return (
    <div className="flex flex-row justify-between items-center pb-4 pt-8 ">
      <div className="flex flex-row content-center">
        <Link href="#!">
          <a className="flex items-center text-white gap-3">
            <Image src={Favicon} alt="logo" />
            <h1 className="font-bold text-[18px] leading-normal">PortFolio</h1>
          </a>
        </Link>
      </div>
      <ul className="hidden sm:flex justify-around items-center gap-x-20">
        {NavbarData.map(({ path, label }, index) => (
          <Link key={index} href={path}>
            <a className="text-[2rem] leading-8 text-black-darklight transition-all duration-[0.4s] ease-in-out hover:text-white hover:opacity-100 hover:cursor-pointer ss:p-0 p-2 ">
              {label}
            </a>
          </Link>
        ))}
      </ul>
      <div className="hidden sm:flex justify-between items-center gap-x-10">
        {SocialData.map(({ path, Icon }, index) => (
          <Link key={index} href={path}>
            <a className="text-white transition ease-in-out duration-[0.3s] rounded-[50px] p-2 hover:bg-black-faintingLight hover:scale-[1.2] hover:cursor-pointer">
              <Icon size="3rem" />
            </a>
          </Link>
        ))}
      </div>
      <div className="sm:hidden flex justify-end items-center flex-1 ">
        <AiOutlineMenu
          size={20}
          className="cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <ul
          className={` ${
            !isMenuOpen ? "hidden" : "flex"
          } p-6 absolute top-20 right-0 mx-10 my-2 min-w-[140px] rounded-xl justify-end items-start flex-1 flex-col bg-black-gradient z-[1]`}
        >
          {NavbarData.map(({ path, label }, index) => (
            <Link key={index} href={path}>
              <a className="text-[18px] leading-8 text-black-darklight transition-all duration-[0.4s] ease-in-out hover:text-white hover:opacity-100 hover:cursor-pointer sm:p-0 p-2 ">
                {label}
              </a>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
