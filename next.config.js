/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true, // هذا هو إعداد تعطيل ESLint عند البناء
  },
  experimental: {
    legacyBrowsers: false, // ✅ désactive la transpilation pour anciens navigateurs
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      type: "asset/resource",
      generator: {
        filename: "static/media/[name].[hash][ext]", // مسار الملفات المستخرجة
      },
    });
    return config;
  },
  images: {
    domains: ["upload.wikimedia.org", "www.vectorlogo.zone"],
  },
};

module.exports = nextConfig;
