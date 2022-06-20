import Link from "next/link";

const PROJECTS_IMAGES_PATH = "/assets/projects";

export interface IBlogEntryData {
  title: string;
  subtitle: string;
  text_1: string;
  text_2: string;
  project_img: string;
  project_link: string;
  project_link_comment: string;
}

export const BlogEntry = (blogEntryData: IBlogEntryData) => {
  const {
    title,
    subtitle,
    text_1,
    text_2,
    project_img,
    project_link,
    project_link_comment,
  } = blogEntryData;

  return (
    <div
      id="blogEntry"
      className="w-full md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="py-4">{title}</h2>
          <p className="py-2 text-gray-600">{subtitle}</p>
          <p className="py-2 text-gray-600">{text_1}</p>
          <p className="py-2 text-gray-600">{text_2}</p>
          <Link href={`/blog/${project_link}`}>
            <p className="py-2 text-gray-600 underline cursor-pointer">
              {project_link_comment}
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-2 hover:scale-105 ease-in duration-300">
          {/*eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="rounded-xl"
            src={`${PROJECTS_IMAGES_PATH}/${project_img}`}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};
