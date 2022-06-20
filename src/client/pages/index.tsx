import type { NextPage } from "next";
import Head from "next/head";

import { About, Contact, Main, Projects, Skills } from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Fran | Software Engineer</title>
        <meta
          name="description"
          content="I'm a Junior Software Engineer passionate about learning new technologies"
        />
        <link rel="icon" href="/assets/nextLogoFull.png" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
