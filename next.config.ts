import { NextConfig } from 'next'

// this does not work
console.log(import.meta)

// this works
// console.log(__dirname)

const nextConfig: NextConfig = {};

export default nextConfig;
