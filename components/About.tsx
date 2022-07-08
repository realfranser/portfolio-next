import Image from "next/image";
import Link from "next/link";
import React from "react";

import aboutDataJSON from "../locales/es-ES/about.json";

interface IAboutData {
  section: string;
  title: string;
  subtitle: string;
  text_1: string;
  text_2: string;
  text_3: string;
  text_4: string;
  name: string;
  projects_link: string;
}

const aboutData: IAboutData = aboutDataJSON;

export const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            {aboutData.section}
          </p>
          <h2 className="py-4">{aboutData.title}</h2>
          <p className="py-2 text-gray-600">{aboutData.subtitle}</p>
          <p className="py-2 text-gray-600">{aboutData.text_1}</p>
          <p className="py-2 text-gray-600">{aboutData.text_2}</p>
          <p className="py-2 text-gray-600">{aboutData.text_3}</p>
          <p className="py-2 text-gray-600">{aboutData.text_4}</p>
          <p className="py-2 text-gray-600">{aboutData.name}</p>
          <a
            href="https://www.linkedin.com/in/fran-serrano/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="py-2 text-gray-600 underline cursor-pointer">
              {aboutData.projects_link}
            </p>
          </a>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-3 hover:scale-105 ease-in duration-300">
          {/*eslint-disable-next-line @next/next/no-img-element */}
          <img className="rounded-xl" src="/assets/mePark.jpg" alt="/" />
        </div>
      </div>
    </div>
  );
};
