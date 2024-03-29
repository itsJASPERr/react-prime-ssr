const { port, env } = require('./index');

const appEnv = process.env.APP_ENV || 'development';

module.exports = type => ({
  'process.env': {
    NODE_ENV: JSON.stringify(env),
    APP_ENV: JSON.stringify(appEnv),
    PORT: port,
  },
  __DEV__: appEnv === 'development',
  __TEST__: appEnv === 'test',
  __ACC__: appEnv === 'acceptation',
  __PROD__: appEnv === 'production',
  __CLIENT__: type === 'client',
  __SERVER__: type === 'server',
});
