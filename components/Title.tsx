import React from "react";
interface TitleProps {
  children: React.ReactNode;
}
const Title: React.FC<TitleProps> = (props) => {
  return (
    <h1 className="sm:mb-4 ss:mb-3 mb-2  sm:p-58-0-16 ss:p-40-0-12 p-16-0-8 font-extrabold sm:text-[65px] ss:text-[56px] text-[28px] sm:leading-[72px] ss:leading-[56px] leading-[32px] w-max max-w-full bg-black-text ">
      {props.children}
    </h1>
  );
};

export default Title;
