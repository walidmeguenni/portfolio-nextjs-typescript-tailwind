import Link from "next/link";
import React from "react";
import { SocialData } from "../constants";
import Contact from "./Contact";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col w-ful mt-5 pt-20 p-[2rem] border-t border-b-fainting-light opacity-40">
      <div className="flex ss:flex-row flex-col justify-between ss::items-center">
        <Contact label="call" link="0696076516" />
        <Contact label="email" link="meguennniwalid@gmail.com" />
      </div>
      <div className="flex justify-between items-center ss:flex-row flex-col ss:text-center text-left mt-8 ss:gap-y-0 gap-y-5">
        <p className="ss:min-w-[280px] min-w-[100px] tracking-[0.02em] ss:text-[18px] text-[14px] ss:leading-[30px] leading-[22px] text-white opacity-50">
          Innovating one project at a time
        </p>
        <div className="flex justify-between items-center gap-x-10">
          {SocialData.map(({ path, Icon }, index) => (
            <Link key={index} href={path}>
              <a className="text-white transition ease-in-out duration-[0.3s] rounded-[50px] p-2 hover:bg-black-faintingLight hover:scale-[1.2] hover:cursor-pointer">
                <Icon size="3rem" />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
