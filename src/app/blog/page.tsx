import { getEntryBlogPost } from "@/utils/contentful";
import * as React from "react";
import CardBlog from "@/components/core/CardBlog";

interface IBlogProps {}

const Blog: React.FunctionComponent<IBlogProps> = async (props) => {
  const getBlogs = await getEntryBlogPost();
  console.log(getBlogs);

  const printBlog = () => {
    if (getBlogs?.length) {
      return getBlogs.map((e: any, i) => {
        const { sys, fields } = e;
        return (
          <CardBlog
            key={sys.id}
            id={sys.id}
            image={fields.image.fields.file.url}
            author={fields.author}
            title={fields.title}
          />
        );
      });
    }
  };

  return (
    <div className="w-full min-h-screen p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 xs:mt-20">
        {printBlog()}
      </div>
    </div>
  );
};

export default Blog;
