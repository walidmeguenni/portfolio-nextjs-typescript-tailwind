import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';

import image1 from "../public/images/1.png";
import image2 from "../public/images/2.png";
import image3 from "../public/images/3.jpg";
import image4 from "../public/images/4.jpg";
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
    path: "https://google.com",
    Icon: AiFillGithub,
  },
  {
    path: "https://google.com",
    Icon: AiFillInstagram,
  },
  {
    path: "https://google.com",
    Icon: AiFillLinkedin,
  },
];

export const projects = [
  {
    title: "MERN Memories",
    description:
      "Using React, Node.js, Express & MongoDB you'll learn how to build a Full Stack MERN Application - from start to finish. The App is called Memories and it is a simple social media app that allows users to post interesting events that happened in their lives.",
    image: image1,
    tags: ["Mongo", "Express", "React", "Node"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 0,
  },
  {
    title: "E-Commerce",
    description:
      "While building it you're going to learn many advanced React & JavaScript topics, as well as how to use Stripe for card transactions. On top of that, at the end of the video, you will have this unique and complex webshop app that you will be able to add to your portfolio. And trust me, e-commerce applications are impressive.",
    image: image2,
    tags: ["React", "JavaScript"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 1,
  },
  {
    title: "WebRTC App",
    description:
      "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
    image: image3,
    tags: ["React", "WebRTC"],
    source: "https://google.com",
    visit: "https://google.com",
    id: 2,
  },
  {
    title: "Unichat",
    description:
      "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application,This is a code repository for the corresponding video tutorial.",
    image: image4,
    tags: ["React", "ChatEngine", "Firebase"],
    source: "https://google.com",
    visit: "https://google.com",
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
  { year: 2017, text: "Started my journey" },
  { year: 2018, text: "Worked as a freelance developer" },
  { year: 2019, text: "Founded JavaScript Mastery" },
  { year: 2020, text: "Shared my projects with the world" },
  { year: 2021, text: "Started my own platform" },
];
export const data = [
  { number: 20, text: "Open Source Projects" },
  { number: 1000, text: "Students" },
  { number: 1900, text: "Github Followers" },
  { number: 5000, text: "Github Stars" },
];