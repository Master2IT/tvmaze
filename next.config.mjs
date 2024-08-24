/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'static.tvmaze.com',
                pathname: '/uploads/images/**',
            },
        ],
    },
};

export default nextConfig;
