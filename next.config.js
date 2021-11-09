/** @type {import('next').NextConfig} */
const withAntdLess = require('next-plugin-antd-less')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer(
  withAntdLess({
    cssLoaderOptions: {},
    // Other Config Here...

    webpack(config) {
      return config
    },

    reactStrictMode: true
  })
)
