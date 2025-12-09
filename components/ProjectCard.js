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
        {project.site_url && (
          <span className="project-card-links">
            <button
              onClick={() => setShowVideo(true)}
              title="View Demo"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <BsPlayCircle />
            </button>
          </span>
        )}

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
<<<<<<< HEAD
=======
          onClick={() => setShowVideo(false)}
>>>>>>> 3e591d6 (Fix mobile layout and improve video player)
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
<<<<<<< HEAD
            backgroundColor: "rgba(0,0,0,0.8)",
=======
            backgroundColor: "rgba(0,0,0,0.9)",
            backdropFilter: "blur(8px)",
>>>>>>> 3e591d6 (Fix mobile layout and improve video player)
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
<<<<<<< HEAD
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
=======
            animation: "fadeIn 0.3s ease-in-out",
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            style={{ position: "relative", width: "auto", height: "auto", maxWidth: "90%", maxHeight: "90%" }}
          >
            <video
              controls
              autoPlay
              playsInline
              preload="auto"
              src={project.site_url}
              style={{ 
                maxWidth: "100%", 
                maxHeight: "85vh", 
                borderRadius: "12px",
                boxShadow: "0 0 50px rgba(0,0,0,0.5)",
                outline: "none"
              }}
            />
            <button
              onClick={() => setShowVideo(false)}
              className="hover:scale-110 transition-transform duration-200"
              style={{
                position: "absolute",
                top: "-40px",
                right: "-10px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                padding: "5px",
                color: "white",
              }}
            >
              <IoClose size={35} />
            </button>
          </div>
>>>>>>> 3e591d6 (Fix mobile layout and improve video player)
        </div>
      )}
    </div>
  );
}
