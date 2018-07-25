const HtmlWebpackPlugin = require('html-webpack-plugin');

// 单独打包css 目前还没有webpack4版本 需安装 extract-text-webpack-plugin@next解决
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer'); // 自动加前缀的插件

module.exports = {
  devtool: false,
  mode: 'production', // 会将 process.env.NODE_ENV 的值设为 production。
  // 启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin,
  // NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 UglifyJsPlugin.
  entry: {
    index: [
      './index.jsx',
    ],
  },
  output: {
    filename: '[name].[chunkhash].js',

    // 输出的打包文件
    path: `${__dirname}/dist/assets/`,

    // 项目输出路径
    publicPath: '/assets/',

    // 对于热替换(HMR)是必须的，让 webpack 知道在哪里载入热更新的模块(chunk)
    chunkFilename: '[name].[chunkhash].js',
  },
  context: `${__dirname}/src`,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
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
            { loader: 'less-loader', options: { javascriptEnabled: true } },
          ],
        }),
        include: /node_modules/,
      },
      {
        // 匹配.less文件
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]',
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
            { loader: 'less-loader', options: { javascriptEnabled: true } },
          ],
        }),
        exclude: /node_modules/,
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
    extensions: ['.jsx', '.js', '.less', '.json'],
    alias: {
      '~': `${__dirname}/src`,
    },
  },
  externals: {
    axios: 'axios',
    'prop-types': 'PropTypes',
    'babel-polyfill': 'window',
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all', // 进行模块拆分 提取公共代码 相当于webpack2 的 CommonsChunkPlugin
    },

    // minimizer: true, // 美化代码 相当于webpack2 的 UglifyJsPlugin mode 为 production 自动 true
  },
  plugins: [

    // 自动生成所需要的html模板
    new HtmlWebpackPlugin({
      template: './Template/index.html',
      filename: '../index.html', // 生成的html存放路径，相对于 path
    }),
    new ExtractTextPlugin({ filename: '[name].[chunkhash].css', allChunks: true, disable: false }),
  ],
};
