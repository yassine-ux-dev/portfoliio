"use client";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { BsPlayCircle } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import LanguageIcon from "./LanguageIcon";

export default function ProjectCard({
  project,
  stackList,
  reverse,
  containerRef,
}) {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div
      className="project-card"
      style={{
        flexDirection: `${reverse ? "row-reverse" : "row"}`,
      }}
    >
      <div
        className="project-card-img"
        style={{ transform: `${reverse ? "translateX(5rem)" : ""}` }}
      >
        <img src={project.image || "/placeholder.svg"} alt="" />
      </div>
      <div className="project-card-info">
        <h6 className="project-card-title-featured">featured project</h6>
        <h1 className="project-card-title">{project.name}</h1>

        {/* Demo Link - Opens video */}
        <span className="project-card-links">
          <button
            onClick={() => setShowVideo(true)}
            title="View Demo"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <BsPlayCircle />
          </button>
        </span>

        {/* GitHub Link */}
        <span className="project-card-links">
          <a
            href={project.github_url}
            target="_blank"
            rel="noopener noreferrer"
            title="View Source Code"
          >
            <FaGithub />
          </a>
        </span>

        <p className="project-card-text">{project.desc}</p>
        <div className="stack-container">
          <h3>Tech stack used : </h3>
          {stackList.map((language, index) => {
            return (
              <LanguageIcon
                key={index}
                language={language}
                containerRef={containerRef}
                cardIcon={true}
              />
            );
          })}
        </div>
      </div>
      {showVideo && (
        <div
          className="video-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <video
            controls
            src={project.site_url}
            style={{ maxWidth: "80%", maxHeight: "80%" }}
          />
          <button
            onClick={() => setShowVideo(false)}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "red",
              color: "white",
              border: "none",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            <IoClose />
          </button>
        </div>
      )}
    </div>
  );
}
