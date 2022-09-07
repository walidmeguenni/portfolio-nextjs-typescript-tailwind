import Image from "next/image";
import React from "react";
import { Divider, Paragraph, Title } from "../components";
import { TimeLineData } from "../constants";
import Arrow from "../public/arrow.svg";
const Timeline: React.FC = () => {
  return (
    <section id="About" className="mt-5 p-[2rem]">
      <Divider />
      <Title>About Me</Title>
      <Paragraph>
        I&rsquo;ve worked with a range a technologies in the web development
        world. From Back-end To Design
      </Paragraph>
      <div className="flex flex-row items-start justify-between  mb-[80px] ml-[32px]  gap-5 some-styles mx-10">
        {TimeLineData.map((items, index) => (
          <div key={index} className={`flex flex-col`}>
            <div className="flex flex-row items-start">
              <h2 className="mr-[21px]">{items.year}</h2>
              <Image src={Arrow} alt="arrow" />
            </div>
            <p className="ss:text-[14px] text-[10px] ss:leading-[22px] leading-[16px] tracking-[0.02em] text-white opacity-70 ss:pr-[16px] pr-0">
              {items.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
