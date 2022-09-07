import React from "react";
import { TagProps } from "../packages/interfaces";

const Tag: React.FC<TagProps> = (props) => (
  <li className="text-[1.5rem] text-peony-blush">{props.tag}</li>
);

export default Tag;
