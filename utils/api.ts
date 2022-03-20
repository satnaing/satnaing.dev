import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "contents");

export function getPostSlugs() {
  const files = fs.readdirSync(postsDirectory);

  const slugs = files.map((file) => {
    const fullPath = join(postsDirectory, file);
    const content = matter(fs.readFileSync(fullPath, "utf8")).data;
    return content.slug ? content.slug : file.replace(/\.md$/, "");
  });

  return slugs;
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const files = fs.readdirSync(postsDirectory);

  let fileName = slug;
  for (let file of files) {
    const fullPath = join(postsDirectory, file);
    const content = matter(fs.readFileSync(fullPath, "utf8")).data;
    if (content.slug === slug) fileName = file.replace(/\.md$/, "");
  }

  const fullPath = join(postsDirectory, `${fileName}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = slug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = JSON.stringify(data[field]);
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) =>
      new Date(post1.datetime).getTime() > new Date(post2.datetime).getTime()
        ? -1
        : 1
    );
  return posts;
}
