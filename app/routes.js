/* eslint-disable no-multi-assign */
const routes = module.exports = require('next-routes')();

routes
  .add('index', '/')
  .add('posts', '/posts')
  .add('posts/single', '/posts/:id');
