const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const unslugify = (str: string) =>
  str.toLowerCase().trim().replace(/[-]+/g, " ");

export default slugify;
