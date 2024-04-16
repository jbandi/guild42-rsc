/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    experimental: {
        // 2024-04-16: Does not seem to work ...?
        // https://nextjs.org/docs/app/api-reference/next-config-js/staleTimes
        staleTimes: {
            dynamic: 1,
            static: 1,
        }
    },
};

export default nextConfig;
