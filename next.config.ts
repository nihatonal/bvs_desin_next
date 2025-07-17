import createNextIntlPlugin from "next-intl/plugin";
import withBundleAnalyzer from "@next/bundle-analyzer";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import nextPWA from "next-pwa"; // ES Modules ile import
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const withPWA = nextPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

const nextConfig: NextConfig = {
  turbopack: false,
  images: {
    domains: ["i.ibb.co"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
    emotion: true,
  },
  webpack(config, { isServer }) {
    if (!isServer && process.env.ANALYZE === "true") {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "static",
          reportFilename: "./analyze/client.html",
          openAnalyzer: false,
          generateStatsFile: true,
          statsFilename: "./analyze/stats.json",
        })
      );
    }
    return config;
  },
};

export default withPWA(bundleAnalyzer(withNextIntl(nextConfig)));
