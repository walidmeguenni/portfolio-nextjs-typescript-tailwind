import React from "react";
interface ParagraphProps {
  children: React.ReactNode;
}
const Paragraph: React.FC<ParagraphProps> = (props) => {
  return (
    <p className="font-light sm:text-[24px] ss:text-[20px] text-[16px] sm:leading-[40px] ss:leading-[32px] leading-[24px] sm:pb-[57.6px] ss:pb-[24px] pb-[16px] sm:max-w-[800px] ss:max-w-[670px] text-white opacity-50">
      {props.children}
    </p>
  );
};

export default Paragraph;
