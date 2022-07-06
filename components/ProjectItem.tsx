import Image from "next/image";
import Link from "next/link";
import React from "react";

import projectItemDataJSON from "../locales/es-ES/projectItem.json";

interface IProjectItemData {
  source: string;
  moreInfo: string;
}

export interface IProjectItemProps {
  backgroundImg: string;
  projectUrl: string;
  title: string;
}

const projectItemData: IProjectItemData = projectItemDataJSON;

export const ProjectItem = ({
  backgroundImg,
  projectUrl,
  title,
}: IProjectItemProps) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      {/*eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="/"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">
          {projectItemData.source}
        </p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            {projectItemData.moreInfo}
          </p>
        </Link>
      </div>
    </div>
  );
};
