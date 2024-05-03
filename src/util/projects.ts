import { Project } from "./interfaces";

export const projects: Project[] = [
  {
    name: "Responsive Redesign",
    description:
      "A responsive redesign of a local bakery website, focusing on usability and accesibility.",
    tools: ["HTML", "CSS", "JavaScript"],
    priority: true,
    link: "/responsiveRedesign",
  },
  {
    name: "Playlist Creator",
    description:
      "An interactive interface for filtering media and organizing them into a playlist.",
    tools: ["React.js", "Typescript"],
    priority: true,
    link: "/playlistCreator",
  },
  {
    name: "Inspofolio",
    description:
      "A web application for artists to organize their multimedia references.",
    tools: ["Next.js", "React.js", "Typescript", "Firebase"],
    priority: true,
    link: "/inspofolio",
  },
];
