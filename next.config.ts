import type { NextConfig } from "next";
import withWebSpatial from "@webspatial/next-plugin";

const nextConfig: NextConfig = withWebSpatial()({
  output: "export",
  distDir: "dist",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // ...(process.env.XR_ENV === "avp" && { basePath: "/webspatial/avp" }),
});

export default nextConfig;
