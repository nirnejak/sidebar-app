import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
}

export default nextConfig
