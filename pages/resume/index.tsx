import React from "react";
import Head from "next/head";
import { FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";

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
        <h2 className="text-center">Curriculum Vitae</h2>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <a
            href="https://drive.google.com/file/d/1EVgIRfTtThI66ZaLeiswODqXxbIt7Ccm/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="hover:underline">
              ¡Disponible también en modelo infográfico!
            </h3>
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
            Proven Leadership <span className="px-1">|</span> Web Development{" "}
            <span className="px-1">|</span> Complex Problem Solving
          </p>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML <span className="px-2">|</span>
            CSS <span className="px-2">|</span>React
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> Firebase
          </p>
          <p className="py-2">
            <span className="font-bold">Amazon Web Services</span>
            <span className="px-2">|</span>Amazon Web Services Cloud
            Practitioner
          </p>
        </div>

        {/* Experience */}
        <div className="py-4">
          <h5 className="text-center underline text-[18px] py-4">
            Professional Experience
          </h5>
          <p className="italic">
            <span className="font-bold">Twilio Inc.</span>
            <span className="px-2">|</span>Madrid, Spain
          </p>
          <p className="py-1 italic">
            Ingeniero de Software (L1) (Feb 2022 - Actual)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ingeniero de Software Junior, involucrado principalmente en
              desarrollo de servicios backend.
            </li>
            <li>
              Responsabilidades sobre taread de DevOps como diseño e
              implementación de tuberías CI/CD o dockerización de servicios y
              bases de datos.
            </li>
            <li>
              Fuerte desarrollo de tests unitarios y de integración para
              asegurar la resiliencia del software implementado.
            </li>
            <li>
              Trabajo en equipo e involucración en presentaciones y demos de los
              requisitos implementados.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-4">
          <p className="italic">
            <span className="font-bold">Twilio Inc.</span>
            <span className="px-2">|</span>Madrid, Spain
          </p>
          <p className="py-1 italic">
            Ingeniero de Software (Prácticas) (Jul 2021 - Sep 2021)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Mejora en la experiencia de usuarios de múltiples países referente
              a la regulación de la compra números de teléfono en los mismos.
            </li>
            <li>
              Desarrollo e2e, desde el frontend con React, backend for frontend
              con Express y backend con Django Python.
            </li>
            <li>
              Familiarización con tecnologías DevOps como Jenkins, AWS, GitHub
              actions, Docker, etc.
            </li>
            <li>
              Trabajo mano a mano con grandes expertos técnicos en la industria
            </li>
            <li>
              Coordinación con equipos de desarrollo extranjeros y en diferentes
              zonas horarias como India, California, etc.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-4">
          <p className="italic">
            <span className="font-bold italic">
              BIGCOMMERCE, SHOPIFY, WOOCOMMERCE
            </span>
            <span className="px-2">|</span>Madrid, Spain
          </p>
          <p className="py-1 italic">Freelance Work</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured comprehensive understanding of HTML, CSS, and JavaScript
              to troubleshoot issues and concerns.
            </li>
            <li>
              Fixes small bugs, configure operation and analytic plugins, and
              design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
