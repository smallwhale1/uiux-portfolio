import { ReactElement } from "react";

export interface Project {
  name: string;
  description: string;
  tools: string[];
  priority?: boolean;
  link?: string;
}

export interface Skill {
  skill: string;
  icon: ReactElement;
}
