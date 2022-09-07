import React from "react";
import { Card, Divider, Title } from "../components";
import { projects } from "../constants";

const Projects: React.FC = () => {
  return (
    <section id="Projects" className={Styles.section}>
      <Divider />
      <Title>Projects</Title>
      <div className="ss:grid gap-y-12 gap-x-8 items-start ss:place-items-center smd:grid-cols-2 flex flex-row flex-wrap ss:p-12 p-8 pb-0">
        {projects.map((items, index) => (
          <Card key={index} {...items} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

const Styles = {
  section:
    "sm:py-16 py-6 flex flex-col m-0-auto box-content relative overflow-hidden ss:p-24-48-0 sm:p-0 p-0",
};
