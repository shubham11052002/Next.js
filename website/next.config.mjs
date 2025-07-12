/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'data:image/jpeg;base64',
                port: '',
            },
        ],
    },

};

export default nextConfig;
