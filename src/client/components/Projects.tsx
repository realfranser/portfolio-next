import Image from "next/image";
import Link from "next/link";
import React from "react";

import machineLearningImg from "../public/assets/projects/ml_gcp.png";
import onlineAffiliatesImg from "../public/assets/projects/online_affiliates.png";
import portfolio from "../public/assets/projects/portfolio.png";
import fullstackToolbox from "../public/assets/projects/webtools.png";

import { IProjectItemProps, ProjectItem } from "./ProjectItem";

const PROJECTS_DATA: IProjectItemProps[] = [
  {
    backgroundImg: machineLearningImg,
    projectUrl: "/blog/property",
    title: "Machine Learning with Google Cloud",
  },
  {
    backgroundImg: onlineAffiliatesImg,
    projectUrl: "/blog/crypto",
    title: "React JS affiliate offers list website",
  },
  {
    backgroundImg: portfolio,
    projectUrl: "/blog/netflix",
    title: "Vanilla JS personal web portfolio",
  },
  {
    backgroundImg: fullstackToolbox,
    projectUrl: "/blog/twitch",
    title: "End to end fullstack template for e-commerce websites",
  },
];

export const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((item: IProjectItemProps) => (
            <ProjectItem
              key={item.title}
              backgroundImg={item.backgroundImg}
              projectUrl={item.projectUrl}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
