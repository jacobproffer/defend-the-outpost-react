// server.js
const next = require('next');
const routes = require('./routes');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const app = next({ dir: './app', dev });
const handler = routes.getRequestHandler(app);
const express = require('express');

app.prepare().then(() => {
  express().use(handler).listen(port);
});
