const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://www.avatarsum.herokuapp.com/',
      changeOrigin: true,
    })
  );
  app.use(
    '/accounts',
    createProxyMiddleware({
      target: 'https://www.clerk.y4uyk.3i8xs.lcl.dev/',
      changeOrigin: true,
    })
  );
};
