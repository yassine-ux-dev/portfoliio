import React from "react";
import { IoIosApps } from "react-icons/io";
import ProjectCard from "./ProjectCard";
import { languages, projects } from "../lib/data";

function ProjectItems() {
  const containerRef = React.useRef(null);
  return (
    <section className="projects" id="projects" ref={containerRef}>
      <div className="projects-container">
        {projects
          .filter((project) => project.featured === true)
          .map((project, index) => {
            const stackList = project.stack
              .map((item) => {
                if (typeof item === "string") {
                  const language = languages.find((x) => x.name === item);
                  return language;
                } else {
                  return item;
                }
              })
              .filter(Boolean);
            return (
              <ProjectCard
                key={index}
                project={project}
                stackList={stackList}
                containerRef={containerRef}
                reverse={index % 2 !== 0 ? true : false}
              />
            );
          })}
      </div>
    </section>
  );
}

export default ProjectItems;
