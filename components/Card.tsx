import Image from "next/image";
import React from "react";
import { CardProps, TagsProps } from "../packages/interfaces";
import { ExternalLinks, Tag } from ".";

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="flex flex-col sm:w-[400px] w-full rounded-[10px] shadow-card">
      <Image
        src={props.image}
        alt={props.title}
        height={225}
        width={400}
        objectFit="cover"
      />
      <div className="pl-12 pt-5 pb-5 z-20 w-full">
        <h1 className="font-medium text-[3rem] tracking-[2px] text-windsor-way">
          {props.title}
        </h1>
        <hr className="w-[50px] h-[3px] border-0 bg-warm-woolen" />
      </div>
      <div className="pl-12 max-w-[350px] max-h-[80px] overflow-hidden font-dmSans font-medium text-gray-400 text-[13px] leading-[20px] text-left">
        {props.description}
      </div>
      <div>
        <h1 className="pl-12 font-medium text-[3rem] tracking-[2px] text-windsor-way">
          Stack
        </h1>
        <Tags tags={props.tags} />
      </div>
      <div className="my-8 flex justify-around">
        <ExternalLinks link={props.visit} content="Preview" />
        <ExternalLinks link={props.source} content="Source Code" />
      </div>
    </div>
  );
};

export default Card;

const Tags: React.FC<TagsProps> = (props) => (
  <ul className="flex justify-around">
    {props.tags.map((tag, index) => (
      <Tag key={index} tag={tag} />
    ))}
  </ul>
);
