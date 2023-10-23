const NextFederationPlugin = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host-app',
        remotes: {
          remote_app: `remote-app@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './navbar': './components/navbar/index.tsx',
        },
        shared: {
          // whatever else
        },
      })
    );

    return config;
  },
};
