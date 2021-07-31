const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://avatarsum.herokuapp.com/',
      changeOrigin: true,
    })
  );
  app.use(
    '/accounts',
    createProxyMiddleware({
      target: process.env['REACT_APP_CLERK_FRONTEND_API'],
      changeOrigin: true,
    })
  );
};
