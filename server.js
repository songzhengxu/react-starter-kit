const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const opn = require('opn');
const config = require('./webpack.config');

// 相当于通过本地node服务代理请求到了http://cnodejs.org/api 根据项目自行修改
const proxy = [{
  path: '/api/*',
  target: 'https://cnodejs.org',
  host: 'cnodejs.org',
}];

// 启动服务
const server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: config.output.path,
  proxy,
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

// 将其他路由，全部返回index.html
server.app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

server.listen(3000);
// 自动打开浏览器
opn('http://localhost:3000');
