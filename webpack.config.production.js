const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // 单独打包css
const autoprefixer = require('autoprefixer'); // 自动加前缀的插件


module.exports = {
  devtool: 'inline-source-map',
  entry: {
    index: [
      './index.jsx',
    ],
    vendor: ['react', 'react-dom', 'react-redux', 'react-router-dom', 'redux', 'redux-thunk'],
  },
  output: {
    filename: '[name].[chunkhash].js',

    // 输出的打包文件
    path: `${__dirname}/dist/assets/`,
    // 项目输出路径
    publicPath: '/assets/',
    // 对于热替换(HMR)是必须的，让 webpack 知道在哪里载入热更新的模块(chunk)
  },

  context: `${__dirname}/src`,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          'babel-loader',
        ],
        exclude: /^node_modules$/,
      },
      {
        // 匹配.css文件
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins() {
                  return [
                    autoprefixer,
                  ];
                },
              },
            },
          ],
        }),
        exclude: /^node_modules$/,
      },
      {
        // 匹配.less文件
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins() {
                  return [
                    autoprefixer,
                  ];
                },
              },
            },
            'less-loader',
          ],
        }),
        exclude: /^node_modules$/,
      },
      {
         // 匹配.html文件
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src', 'link:href'],
            },
          },
        ],
        exclude: /^node_modules$/,
      },
      {
        test: /favicon\.png$/,
        use: [
          {
           // 使用file-loader
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
        exclude: /^node_modules$/,
      },
      {
        // 处理静态资源
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        exclude: /favicon\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.less', '.json', '.jsx'],
    alias: {
      '~': `${__dirname}/src`,
    },
  },
  plugins: [
    // 将第三方库单独打包
    new webpack.optimize.CommonsChunkPlugin({ names: ['vendor', 'manifest'] }),
    // 添加系统全局变量
    new webpack.DefinePlugin({ // 编译成生产版本
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    // 自动生成所需要的html模板
    new HtmlWebpackPlugin({
      template: './Template/index.html',
      filename: '../index.html', // 生成的html存放路径，相对于 path
    }),
    new ExtractTextPlugin({ filename: '[name].[chunkhash].css', allChunks: true, disable: false }),
  ],
};
