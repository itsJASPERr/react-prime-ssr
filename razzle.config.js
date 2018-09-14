// eslint-disable-next-line import/no-extraneous-dependencies
const { DefinePlugin } = require('webpack');
const globals = require('./src/config/globals');

module.exports = {
  // eslint-disable-next-line no-unused-vars
  modify(config, { target, dev }, webpack) {
    // Stay immutable
    const appConfig = config;
    const isServer = target === 'node';
    
    // Add global variables depending on environment
    appConfig.plugins.push(new DefinePlugin(globals(isServer ? 'server' : 'client')));

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

    return appConfig;
  },
};
