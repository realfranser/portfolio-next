import Image from "next/image";
import Link from "next/link";
import React from "react";

export const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">I am not your average developer</p>
          <p className="py-2 text-gray-600">
            From Madrid, Spain, finishing this spring my Bachelor&apos;s Degree
            in Computer Engineering at{" "}
            <a
              href="https://www.upm.es"
              target="_blank"
              rel="noopener noreferrer"
            >
              UPM
            </a>
            and working as a Junior Software Engineer (L1) at{" "}
            <a
              href="https://www.twilio.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twilio Inc.
            </a>{" "}
            Asside of the degree and job, I develop software projects
            specialized in web development (MERN, MySQL, Python, Go, AWS,
            Docker, etc.) and also some Data Science/ML (Python, Pytorch, Cloud
            Computing).
          </p>
          <p className="py-2 text-gray-600">
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive. I then started
            freelancing for e-commerce companies on the Shopify platform. I am
            now spending my time building projects with React JS, Firebase, and
            learning new technologies.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          {/*eslint-disable-next-line @next/next/no-img-element */}
          <img className="rounded-xl" src="/assets/mePark.jpg" alt="/" />
        </div>
      </div>
    </div>
  );
};
