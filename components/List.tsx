import React from "react";
import { TechnologiesData } from "../constants";
import ListItem from "./ListItem";

const List: React.FC = () => {
  return (
    <ul className="list-none grid grid-cols-3 gap-[40px]">
      {TechnologiesData.map((items) => (
        <ListItem key={items.id} {...items} />
      ))}
    </ul>
  );
};

export default List;
