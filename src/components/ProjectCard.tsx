import "../styles/ProjectCard.css";
import { useEffect, useRef, useState } from "react";
import { LuExternalLink } from "react-icons/lu";
import { Project } from "../util/interfaces";
import Tool from "./Tool";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [imgHeight, setImgHeight] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);

  const getImgUrl = (): string => {
    return `/assets/images/projects/${project.name
      .toLowerCase()
      .split(" ")
      .join("-")}.png`;
  };

  useEffect(() => {
    if (!cardRef.current) return;
    const handleResize = () => {
      const width = cardRef.current?.getBoundingClientRect().width;
      if (width) {
        setImgHeight(width * 0.569);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return project.link ? (
    <a href={project.link} style={{ height: "100%", display: "block" }}>
      <div
        className={"project-card"}
        ref={cardRef}
        style={{ height: "100%", display: "block" }}
      >
        <div className={"img-container"} style={{ height: imgHeight }}>
          <img
            onLoad={() => setImgLoaded(true)}
            className={`card-img ${imgLoaded && "card-img-shown"}`}
            src={getImgUrl()}
            alt={`${project.name}`}
          />
        </div>
        <div className={"card-text"}>
          <h4>
            {project.name}
            {/* <LuExternalLink /> */}
          </h4>
          <p>{project.description}</p>
          {/* <div className={"tools"}>
            {project.tools.map((tool) => (
              <Tool key={tool} tool={tool} />
            ))}
          </div> */}
        </div>
      </div>
    </a>
  ) : (
    <div className={"project-card"} ref={cardRef}>
      <div className={"img-container"} style={{ height: imgHeight }}>
        <img
          onLoad={() => setImgLoaded(true)}
          className={`card-img ${imgLoaded && "card-img-shown"}`}
          src={getImgUrl()}
          alt={`${project.name}`}
        />
      </div>
      <div className={"card-text"}>
        <h4>{project.name}</h4>
        <p>{project.description}</p>
        <div className={"tools"}>
          {project.tools.map((tool) => (
            <Tool key={tool} tool={tool} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
