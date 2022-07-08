import React from "react";
import Head from "next/head";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import resumeDataJSON from "../../locales/es-ES/resume/resume.json";

interface IResumeExperienceItem {
  company: string;
  location: string;
  possition: string;
  duration: string;
  responsibilities: string[];
}

interface IResumeEducationItem {
  institution: string;
  title: string;
  duration: string;
  description: string;
}

interface IResumeData {
  title: string;
  infographic: string;
  subtitle_1: string;
  subtitle_2: string;
  subtitle_3: string;
  description: string;
  skills_title: string;
  skills_technical_skills_title: string;
  skills_technical_skills_list: string[];
  skills_soft_skills_title: string;
  skills_soft_skills_list: string[];
  experience_title: string;
  experience_list: IResumeExperienceItem[];
  education_title: string;
  education_list: IResumeEducationItem[];
}

const resumeData: IResumeData = resumeDataJSON;

const resume = () => {
  return (
    <>
      <Head>
        <title>Fran | Resume</title>
        <meta
          name="description"
          content="I'm a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">{resumeData.title}</h2>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <a
            href="https://drive.google.com/file/d/1DHumYPMV608zNxMHm2yHj-mPJjPz0ke3/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="hover:underline">{resumeData.infographic}</h3>
          </a>
        </div>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Francisco Serrano</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/fran-serrano/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/realfranser"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <p>
            {resumeData.subtitle_1}
            <span className="px-1">|</span>
            {resumeData.subtitle_2}
            <span className="px-1">|</span>
            {resumeData.subtitle_3}
          </p>
        </div>
        <p>{resumeData.description}</p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">
            {resumeData.skills_title}
          </h5>
          <p className="py-2">
            <span className="font-bold">
              {resumeData.skills_technical_skills_title}
            </span>
            {resumeData.skills_technical_skills_list.map((item: string) => (
              <>
                <span className="px-2">|</span>
                <span className="px-2">{item}</span>
              </>
            ))}
          </p>
          <p className="py-2">
            <span className="font-bold">
              {resumeData.skills_soft_skills_title}
            </span>
            {resumeData.skills_soft_skills_list.map((item: string) => (
              <>
                <span className="px-2">|</span>
                <span className="px-2">{item}</span>
              </>
            ))}
          </p>
        </div>

        {/* Experience */}
        <div className="py-4">
          <h5 className="text-center underline text-[18px] py-4">
            {resumeData.experience_title}
          </h5>
          {resumeData.experience_list.map((item: IResumeExperienceItem) => (
            <>
              <p className="italic">
                <span className="font-bold">{item.company}</span>
                <span className="px-2">|</span>
                {item.location}
              </p>
              <p className="py-1 italic">
                {item.possition} ({item.duration})
              </p>
              <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
                {item.responsibilities.map((item: string) => (
                  <>
                    <li>{item}</li>
                  </>
                ))}
              </ul>
            </>
          ))}
        </div>
        {/* Education */}
        <div className="py-4">
          <h5 className="text-center underline text-[18px] py-4">
            {resumeData.education_title}
          </h5>
          {resumeData.education_list.map((item: IResumeEducationItem) => (
            <>
              <p className="italic">
                <span className="font-bold">{item.institution}</span>
              </p>
              <p className="py-1 italic">
                {item.title} ({item.duration})
              </p>
              <span className="px-2">{item.description}</span>
              <br></br>
              <br></br>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default resume;
