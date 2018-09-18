// eslint-disable-next-line import/no-extraneous-dependencies
const { DefinePlugin } = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const globals = require('./src/config/globals');

const port = 3000;

module.exports = {
  // eslint-disable-next-line no-unused-vars
  modify(config, { target, dev }, webpack) {
    // Stay immutable
    const appConfig = config;
    const isServer = target === 'node';

    // Add global variables depending on environment
    appConfig.plugins.push(new DefinePlugin(globals(isServer ? 'server' : 'client')));

    if (dev) {
      // Change port so we can run browser-sync on port 3000
      if (appConfig.devServer && appConfig.devServer.port) {
        appConfig.devServer.port = port;
      }

      // Add browser-sync for easy development on multiple browsers
      if (isServer) {
        appConfig.plugins.push(new BrowserSyncPlugin({
          host: 'localhost',
          port: port + 1,
          proxy: `http://localhost:${port}/`,
        }, {
          // let devServer handle reloading
          reload: false,
        }));
      }

      // Transform ESLint errors (that stop the build) to warnings
      appConfig.module.rules.forEach((rule) => {
        if (rule.enforce) {
          rule.use.forEach((_use) => {
            if (_use.options && _use.options.useEslintrc) {
              _use.options.emitWarning = true;
            }
          });
        }
      });
    }

    return appConfig;
  },
};
