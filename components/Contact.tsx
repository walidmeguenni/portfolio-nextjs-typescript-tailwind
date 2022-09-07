import Link from "next/link";
import React from "react";
interface ContactProps {
  link: string;
  label: string;
}
const Contact: React.FC<ContactProps> = ({ link, label }) => {
  const contactType = label === "email" ? "mailto" : "tel:";
  return (
    <div className="ss:w-auto w-full  flex flex-col ss:items-start items-center">
      <h4 className="font font-semibold ss:text-[12px] text-[16px] ss:leading-[24px] leading-[12px] ss:mb-[16px] mb-[16px] text-white opacity-40 uppercase ss:mt-0 mt-5">
        {label}
      </h4>
      <Link href={`${contactType}:${link}`}>
        <a className="text-[18px] leading-[30px] mb-[16px] relative left-0 transition duration-[0.3s] ease-in-out hover:opacity-100 hover:left-6 text-white opacity-75">
          {link}
        </a>
      </Link>
    </div>
  );
};

export default Contact;
