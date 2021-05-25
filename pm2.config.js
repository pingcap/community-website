// The configuration is referred to
// https://pm2.keymetrics.io/docs/tutorials/capistrano-like-deployments
module.exports = {
  apps: [
    {
      name: 'community-website',

      // Provide the relative address otherwise PM2 cannot identify the next command
      script: 'node_modules/.bin/gatsby',
      args: 'serve',

      // `cwd` is used for resolving a symlink related issue mentioned below:
      // https://pm2.keymetrics.io/docs/tutorials/capistrano-like-deployments#the-main-issue
      // Otherwise, PM2 will readlink first and break the server reload.
      cwd: process.env.PWD,
      // gatsby serve does not support cluster mode, running multiple instances
      // might result in total service failure upon reload.
      // TODO: find a workaround.
      instances: 1,
      exec_mode: 'cluster',
    },
  ],
};