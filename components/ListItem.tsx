import React from "react";
import { ListItemProps } from "../packages/interfaces";

const ListItem: React.FC<ListItemProps> = ({ title, description, Icon }) => {
  return (
    <li className="flex flex-col sm:max-w-[350px] ss:mb-[14px] ss:maw-w-[350px] max-w-[350p] ">
      <picture>
        <Icon size="3rem" />
      </picture>
      <div className="flex flex-col">
        <h1 className="font-bold ss:text-[28px] text-[20px] ss:leading-[32px] leading-[28px] tracking-[0.02em] text-white ss:mb-[8px] mb-[4px]">
          {title}
        </h1>
        <p className="font-medium smd:text-[18px] text-[16px] smd:leading-[28px] leading-[22px] text-white opacity-70">
          Experiece with <br />
          {description}
        </p>
      </div>
    </li>
  );
};

export default ListItem;
