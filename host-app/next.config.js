const NextFederationPlugin = require('@module-federation/nextjs-mf');
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options;
    config.experiments = { topLevelAwait: true };
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host-app',
        remotes: {
          remote_app: `remote-app@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          '.footer': '/components/Footer.js',
          '.nav': '/components/Nav.js'
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
