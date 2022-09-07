import React from "react";
import { Divider, List, Paragraph, Title } from "../components";

const Technologies: React.FC = () => {
  return (
    <section id="Technologies" className="mt-5 p-[2rem]">
      <Divider />
      <Title>Technologies</Title>
      <Paragraph>
        I&rsquo;ve worked with a range a technologies in the web development
        world. From Back-end To Design
      </Paragraph>
      <List/>
    </section>
  );
};

export default Technologies;
