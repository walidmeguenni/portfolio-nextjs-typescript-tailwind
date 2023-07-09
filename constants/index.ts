import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiUpwork } from "react-icons/si";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";

import image1 from "../public/images/1.png";
import image2 from "../public/images/2.png";
import image3 from "../public/images/3.png";
import image4 from "../public/images/4.png";
export const NavbarData = [
  {
    label: "Projects",
    path: "#Projects",
  },
  {
    label: "Technologies",
    path: "#Technologies",
  },
  {
    label: "About",
    path: "#About",
  },
];

export const SocialData = [
  {
    path: "https://github.com/walidmeguenni/",
    Icon: AiFillGithub,
  },
  {
    path: "https://www.upwork.com/freelancers/~01e2290b476b27870f",
    Icon: SiUpwork,
  },
  {
    path: "https://www.linkedin.com/in/walid-meguenni",
    Icon: AiFillLinkedin,
  },
];

export const projects = [
  {
    title: "Startup Landing",
    description:
      "Startup Landing Template already have all the necessary sections, just add your touch to make it your own, and voila - you’re ready to announce your presence to the world!",
    image: image1,
    tags: ["Nextjs", "Typescript", "tailwind css"],
    source:
      "https://github.com/walidmeguenni/startup-landing-nextjs-typescript-tailwind",
    visit: "https://startup-landing-lime.vercel.app/",
    id: 0,
  },
  {
    title: "E-Commerce",
    description:
      "E-commerce application included modern design and animations, the ability to mange products on the go using a Sanity, and the complete integration with Stripe so that you can cover real payments.",
    image: image2,
    tags: ["Nextjs", "JavaScript", "tailwind css"],
    source: "https://github.com/walidmeguenni/MG_ecommerce",
    visit: "https://mg-ecommerce.vercel.app/",
    id: 1,
  },
  {
    title: "Bank Landing",
    description:
      "Bank Landing Template already have all the necessary sections, just add your touch to make it your own, and voila - you’re ready to announce your presence to the world!",
    image: image3,
    tags: ["Nextjs", "Typescript", "tailwind css"],
    source: "https://github.com/walidmeguenni/project-hoobank-next-typescript",
    visit: "https://hoobank-orpin.vercel.app/",
    id: 2,
  },
  {
    title: "Inventory Landing",
    description:
      "Inventory Landing Template already have all the necessary sections, just add your touch to make it your own, and voila - you’re ready to announce your presence to the world!",
    image: image4,
    tags: ["Reactjs", "JavaScript", "Material ui"],
    source: "https://github.com/walidmeguenni/landingPage",
    visit: "https://landing-page-walid-mg12.vercel.app/",
    id: 3,
  },
];

export const TechnologiesData = [
  {
    id: 1,
    Icon: DiReact,
    title: "Front-End",
    description: "React.js",
  },
  {
    id: 2,
    Icon: DiFirebase,
    title: "Back-End",
    description: "Node and Databases",
  },
  {
    id: 3,
    Icon: DiZend,
    title: "UI/UX",
    description: "React.js",
  },
];

export const TimeLineData = [
  { year: 2018, text: "Started at computer sience university" },
  { year: 2019, text: "Started learning as web developer" },
  { year: 2020, text: "Begin a MERN Stack Developer" },
  { year: 2021, text: "I got a bachelor's degree" },
  { year: 2022, text: "Worked as a freelancer developer" },
];
export const data = [
  { number: 20, text: "Open Source Projects" },
  { number: 10, text: "WebSites" },
  { number: 100, text: "problems solved" },
  { number: 3, text: "Communication languages" },
];
