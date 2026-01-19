/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
  experimental:{
    turbopackFileSystemCacheForDev: true
  },
  serverActions: {
    bodySizeLimit: "10mb", // ou la taille max souhaitée
  },
  reactCompiler: true,
  reactStrictMode: true,
  experimental: {
    serverActions: {
      bodySizeLimit: "20mb", // adjust as needed
    },
  },
  images: {
    domains: ["static.wixstatic.com"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgs.search.brave.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "qzjzslfuodlejjwnebgh.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
