/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: false,
    optimizeFonts: true,
    eslint: {
        ignoreDuringBuilds: true
    }
};

module.exports = nextConfig;
