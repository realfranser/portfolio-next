import React from "react";

import projectsDataJSON from "../locales/es-ES/projects.json";

import { IProjectItemProps, ProjectItem } from "./ProjectItem";

interface IProjectData {
  title: string;
  subtitle: string;
  projects: IProjectItemProps[];
}

const PROJECTS_IMAGES_PATH = "/assets/projects";

const projectsData: IProjectData = projectsDataJSON;

const { title, subtitle, projects } = projectsData;

export const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          {title}
        </p>
        <h2 className="py-4">{subtitle}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((item: IProjectItemProps) => (
            <ProjectItem
              key={item.title}
              backgroundImg={`${PROJECTS_IMAGES_PATH}/${item.backgroundImg}`}
              projectUrl={item.projectUrl}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
