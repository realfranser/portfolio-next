import Head from "next/head";

import blogEntries from "../../locales/es-ES/blog/blogEntries.json";
import { BlogEntry, IBlogEntryData } from "../../components/BlogEntry";

const blogEntryDataList: IBlogEntryData[] = blogEntries;

const blog = () => {
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
      <div id="blog">
        <h2 className="text-center">Mi blog de tecnología</h2>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider"></div>
        {blogEntryDataList.map((item: IBlogEntryData, index) => (
          <BlogEntry key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default blog;
