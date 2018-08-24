// eslint-disable-next-line import/no-extraneous-dependencies
const { DefinePlugin } = require('webpack');
const globals = require('./src/config/globals');

module.exports = {
  // eslint-disable-next-line no-unused-vars
  modify(config, { target, dev }, webpack) {
    // Stay immutable
    const appConfig = config;
    const isServer = target === 'node';

    appConfig.plugins.push(new DefinePlugin(globals(isServer ? 'server' : 'client')));

    return appConfig;
  },
};
