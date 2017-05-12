const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const proxy = require('http-proxy-middleware');

// 启动服务
const server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: config.output.path,
  // 开启服务器的模块热替换(HMR)
  hot: true,
  // 当请求不存在的路由时，直接返回首页
  historyApiFallback: {
    index: '/assets/',
    disableDotRule: true,
  },
  stats: {
    colors: true,
  },
});

// 你只需要执行这一段代码，当你访问需要跨域的api资源时，就可以成功访问到了。
server.app.use('/api/*', proxy({
  target: 'http://rap.fanweimei.com/mockjsdata/3',
  changeOrigin: true,
}));

// 将其他路由，全部返回index.html
server.app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

server.listen(3000);
