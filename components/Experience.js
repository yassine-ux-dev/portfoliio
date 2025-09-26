import React from "react";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1a202c",
        color: "#fef3c7",
      }}
      contentArrowStyle={{ borderRight: "0px solid  #fef3c7" }}
      date={experience.date}
      iconStyle={{
        background: "transparent", // remove background if you want a clean circle
        boxShadow: "none", // remove the default shadow
      }}
      icon={
        <div className="relative w-full h-full">
          <div className="absolute  top-[-40px] left-1/2 transform -translate-x-1/2 w-[30px] h-[30px] rounded-full bg-[#bbffbb]"></div>
        </div>
      }
    >
      <div className="top-[-40px]">
        <h3 className="ex text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div id="experience" variants={textVariant()}>
        <p
          className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center`}
        >
          What I have done so far
        </p>
        <h2
          className={`titlexperience font-black md:text-[50px] sm:text-[40px] xs:text-[30px] text-[30px] text-center`}
        >
          Education and practical experience
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;
