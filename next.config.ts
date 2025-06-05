import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  allowedDevOrigins: ["http://localhost:4000", "*"],
  expireTime: 3600,
  devIndicators: false
}
 
export default nextConfig