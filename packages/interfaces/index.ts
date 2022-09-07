import type { StaticImageData } from "next/image";
import type { IconType } from "react-icons";

export interface CardProps {
  title: string;
  description: string;
  image: StaticImageData;
  tags: string[];
  source: string;
  visit: string;
  id: number;
}

export interface TagProps {
  tag: string;
}
export interface TagsProps {
  tags: string[];
}

export interface ListItemProps {
  id: number;
  title: string;
  description: string;
  Icon: IconType;
}