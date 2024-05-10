import "../styles/Projects.css";
import { useTheme } from "@mui/material";
import { projects } from "../util/projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const theme = useTheme();

  return (
    <div className={`projects`}>
      <h3 className="section-heading">Projects</h3>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
