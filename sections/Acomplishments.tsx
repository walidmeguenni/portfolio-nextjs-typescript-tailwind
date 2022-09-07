import React from "react";
import { Divider, Paragraph, Title } from "../components";
import { data } from "../constants";

const Acomplishments: React.FC = () => {
  return (
    <section className="mt-5 p-[2rem]">
      <Divider />
      <Title>Personal Achievements</Title>
      <div className="w-full grid sm:grid-cols-4 ss:grid-cols-auto-fit grid-cols-2 sm:gap-[24px] ss:gap-[16px] gap-[15px] sm:m-24-0-40 ss:m-20-0-32 m-24-auto ss:max-w-none max-w-[500px]">
        {data.map((card, index) => (
          <div key={index} className="md:h-[144px] sm:h-[210px] ss:h-[135px] h-[110px] sm:p-[24px] ss:p-[16px] p-[12px] rounded-[12px] bg-fainting-light card">
            <h5 className="font-semibold not-italic ss:text-[36px] text-[24px] ss:leading-[40px] leading-[26px] tracking-[0.01em] text-white mb-[8px]">{card.number}+</h5>
            <p className="not-italic font-normal ss:text-[18px] text-[10px] ss:leading-[24px] leading-[14px] tracking-[0.02em] text-white opacity-70">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Acomplishments;
