const { NextFederationPlugin } = require('@module-federation/nextjs-mf')
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options;
    config.experiments = { topLevelAwait: true };
    config.plugins.push(
      new NextFederationPlugin({
        name: 'remote-app',
        remotes: {
          remote_app: `host-app@http://localhost:3000/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          
        },
        shared: {
          // whatever else
        },
      })
    );
    return config;
  }
}

module.exports = nextConfig
