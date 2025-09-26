import React from "react";
import ProjectItems from "./ProjectItems";

const Projects = () => {
  return (
    <div id="project" className="w-full">
      <div className=" max-w-[1240px] mx-auto px-2 py-16 justify-center">
        <p className="project mb-[20px] text-[34px] font-bold flex justify-center items-center   ">
          Projects
        </p>

        <div className="grid md:grid-col-2 gap-8">
          <ProjectItems />
        </div>
      </div>
    </div>
  );
};

export default Projects;
