import { createClient } from "contentful";

export const CreateContentClient = () => {
  return createClient({
    space: "gm3hiocys8i5",
    accessToken: "Ao5lm9e3jTw5PP2c-SkTasLXQGivlsegWZbC3FzPl_A",
  });
};

const client = CreateContentClient();

export const getEntryBlogPost = async () => {
  try {
    const response = await client.getEntries({ content_type: "blogPost" });

    const blogs = response.items;

    return blogs;
  } catch (error) {
    console.log(error);
  }
};

export const getEntryById = async (id: string) => {
  try {
    const response = await client.getEntries({ "sys.id": `${id}` });

    const blogs = response.items;
    return blogs;
  } catch (error) {
    console.log(error);
  }
};
