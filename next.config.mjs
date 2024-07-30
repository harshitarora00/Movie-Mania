/** @type {import('next').NextConfig} */
const nextConfig = {
   output: {
     "export"
   },  // <=== enables static exports
  reactStrictMode: { 
    true
  },
  images: {
    domains: ["image.tmdb.org"],
  },
};

export default nextConfig;
