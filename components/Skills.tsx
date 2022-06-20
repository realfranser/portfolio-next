import Image from "next/image";
import React from "react";

const TECHNOLOGIES_IMAGES_PATH = "/assets/technologies";

interface ISkillCardProps {
  img: string;
  technology: string;
}

const SKILL_LIST: ISkillCardProps[] = [
  {
    img: `${TECHNOLOGIES_IMAGES_PATH}/css.png`,
    technology: "CSS",
  },
  {
    img: `${TECHNOLOGIES_IMAGES_PATH}/firebase.png`,
    technology: "Firebase",
  },
  {
    img: `${TECHNOLOGIES_IMAGES_PATH}/github1.png`,
    technology: "GitHub",
  },
  {
    img: `${TECHNOLOGIES_IMAGES_PATH}/html.png`,
    technology: "HTML",
  },
  {
    img: `${TECHNOLOGIES_IMAGES_PATH}/javascript.png`,
    technology: "JavaScript",
  },
  {
    img: `${TECHNOLOGIES_IMAGES_PATH}/mongo.png`,
    technology: "Mongo",
  },
  {
    img: `${TECHNOLOGIES_IMAGES_PATH}/node.png`,
    technology: "Node",
  },
  {
    img: `${TECHNOLOGIES_IMAGES_PATH}/react.png`,
    technology: "React",
  },
];

const SkillCard = ({ img, technology }: ISkillCardProps) => {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={img} width="64px" height="64px" alt="/" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{technology}</h3>
        </div>
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_LIST.map((item: ISkillCardProps) => (
            <div
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
              key={item.technology}
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={item.img} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{item.technology}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
