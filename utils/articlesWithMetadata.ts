import { MdxMeta } from "@/components/BlogLayout";
import { Console } from "console";
import fs from "fs";
import path from "path";
import formatDatetime from "./formatDatetime";

const postsPath = "pages/blog/posts";
const articles = fs.readdirSync(path.join(postsPath));

export async function articlesWithMetadata() {
  // const articlesWithMetadata = [];
  const posts: MdxMeta[] = [];
  for (let article of articles) {
    try {
      // We must restrict the directory with a hard-coded string to avoid
      // webpack looking at all directories. So we use ../pages/articles and not
      // an `ARTICLES` constant or join(process.cwd(), "articles", file)
      const { meta } = await import(`../pages/blog/posts/${article}`);
      // article = meta;
      const slug = article.replace(".mdx", "");
      posts.push({ slug, ...meta });
    } catch (error) {
      console.log(`Error on ${article}: ${error}`);
    }
    // articlesWithMetadata.push(article);
  }
  return posts
    .sort(
      (a, b) => new Date(a.datetime).getTime() - new Date(b.datetime).getTime()
    )
    .reverse();
}
