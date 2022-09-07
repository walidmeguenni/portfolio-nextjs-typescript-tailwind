import React from "react";
import { BgAnimation, Button, Paragraph, Title } from "../components";

const HeroBanner: React.FC = () => {
  return (
    <section id="" className="grid sm:grid-cols-2 grid-cols-1 gap-1">
      <div className="flex flex-col max-w-[1040px] box-content relative overflow-hidden sm:p-0-auto">
        <Title>
          Welcome To <br className="ss:flex hidden" />
          My Personal Portfolio
        </Title>
        <Paragraph>
          Hi My Is Walid Meguenni, I&rsquo;m A Software Engineer And Also A Web
          Developer
        </Paragraph>
        <Button />
      </div>
      <div className="mt-3 hidden ss:block">
        <BgAnimation />
      </div>
    </section>
  );
};

export default HeroBanner;
