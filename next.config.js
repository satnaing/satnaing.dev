/** @type {import('next').NextConfig} */

module.exports = {
  // Append the default value with md extensions
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx", "html"],
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
};

// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
