/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    modern: true, // génère des bundles ES6+ pour navigateurs modernes
    polyfillsOptimization: true, // retire polyfills inutiles
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // هذا هو إعداد تعطيل ESLint عند البناء
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
