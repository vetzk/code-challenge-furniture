import { getEntryById } from "@/utils/contentful";
import Markdown from "markdown-to-jsx";
import * as React from "react";

interface IBlogDetailProps {
  params: { id: string };
}

const BlogDetail: React.FunctionComponent<IBlogDetailProps> = async ({
  params,
}) => {
  const blogList = await getEntryById(params.id);
  console.log(blogList);

  if (blogList?.length) {
    return blogList?.map((val: any, i) => {
      const createdAtDate = new Date(val.fields.createdAt);
      const formattedDate = createdAtDate.toDateString();
      return (
        <div
          key={i}
          className="w-full min-h-screen items-center flex flex-col my-5 p-10"
        >
          <p className="text-4xl font-bold my-5 xs:text-center xs:pt-20">
            {val.fields.title}
          </p>
          <p className="text-2xl xs:text-center">
            created By: <strong>{val.fields.author}</strong>
          </p>
          <p className="text-xl xs:text-center">{formattedDate}</p>
          <Markdown>{val.fields.description}</Markdown>
        </div>
      );
    });
  }
  return <div>{params.id}</div>;
};

export default BlogDetail;
