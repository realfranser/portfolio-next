import Link from "next/link";

import blogEntries from "../../locales/es-ES/blog/blogEntries.json";
import { BlogEntry, IBlogEntryData } from "../../components/BlogEntry";

const blogEntryDataList: IBlogEntryData[] = blogEntries;

const blog = () => {
  return (
    <div id="blog">
      <h2 className="text-center">Mi blog de tecnología</h2>
      <div className="text-center py-4 text-xl font-bold uppercase tracking-wider"></div>
      {blogEntryDataList.map((item: IBlogEntryData, index) => (
        <BlogEntry key={index} {...item} />
      ))}
    </div>
  );
};

export default blog;
