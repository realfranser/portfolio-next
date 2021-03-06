import Image from "next/image";
import Head from "next/head";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

import machineLearningImg from "../../public/assets/projects/ml_gcp.png";
import { IBlogEntryData } from "../../components/BlogEntry";
import blogEntriesJSON from "../../locales/es-ES/blog/blogEntries.json";

const blogEntry: IBlogEntryData = blogEntriesJSON[1];

const MachineLearning = () => {
  return (
    <>
      <Head>
        <title>Fran | Blog</title>
        <meta
          name="description"
          content="I'm a Junior Software Engineer passionate about learning new technologies"
        />
        <link rel="icon" href="/assets/nextLogoFull.png" />
      </Head>
      <div className="w-full">
        <div className="w-screen h-[30vh] lg:h-[40vh] relative">
          <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={machineLearningImg}
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Predicción del peso de un bebé con ML</h2>
            <h3>React JS / Tailwind / Firebase</h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <br></br>
            <p>{blogEntry.text_1}</p>
            <br></br>
            <p>{blogEntry.text_2}</p>
            <a
              href="https://drive.google.com/file/d/1yGx9DDbPeEp8CsqkcdLENRgRtD1C1oqi/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-2 mt-4 mr-8">Demo</button>
            </a>
            <a
              href="https://github.com/realfranser/MachineLearning-GoogleCloud"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-8 py-2 mt-4">Code</button>
            </a>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> React
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Tailwind
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Javascript
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Firebase
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Google API
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Zillow API
                </p>
              </div>
            </div>
          </div>
          <Link href="/blog">
            <p className="underline cursor-pointer">Back</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MachineLearning;
