react-starter-kit
=================

基于webpack2 + ES6/7 + less + React15.5 + Redux3.6 + React-Router4.0 + react-hot-loader3 + antd

> 这个脚手架工程模板用于快速启动基于 React + Webpack 为技术栈的前端项目

Features 功能特性
-----------------

-	可以解析 JSX 语法
-	可以解析 ES6/ES7 语法新特性
-	支持 LESS 预处理器
-	编译完成自动打开浏览器
-	区分开发环境和生产环境,代码中插入环境变量
-	实现组件级热更新
-	实现代码的热替换，浏览器实时刷新查看效果
-	分离业务功能代码和公共依赖代码，单独打包第三方库
-	单独分离 CSS 样式文件
-	支持编译 HTML 模板
-	支持文件 MD5 戳,解决文件缓存问题
-	支持图片、图标字体等资源的编译
-	可以进行代码规则校验
-	支持 mocha 测试用例运行
-	支持一行命令产出待部署资源
-	自动补全文件后缀
-	CSS3 使用autoprefixer自动补全前缀
-	指定静态资源的url路径前缀
-	简化import路径
-	配置favicon
-	使用webpack 2自带的ES6模块处理功能
-	编译前清空dist目录

---

1.	start --------

```
$ git clone https://github.com/songzhengxu/react-starter-kit.git
$ cd react-starter-kit
$ npm install
```

1.	dev ------

### 2.1 开发调试

```
//启动项目
$ npm run dev
```

将自动打开浏览器`http://127.0.0.1:3000`

### 2.2 代码检查

```
$ 教程待写
```

### 2.3 测试用例

```
$ npm run test //功能还没完善
```

### 2.4 产出资源

```
$ npm run build
```

1.	技术栈 ------
2.	[x] [Webpack](https://webpack.github.io)

3.	[x] [React](https://facebook.github.io/react/)

4.	[x] [ES6](http://es6.ruanyifeng.com/)

5.	[x] [Redux](https://github.com/rackt/redux)

6.	[x] [React-router](https://github.com/rackt/react-router-redux)

7.	[x] [Babel](https://babeljs.io/)

8.	[ ] [Autoprefixer](https://github.com/postcss/autoprefixer)

9.	[ ] [PostCSS](https://github.com/postcss/postcss)

10.	[x] [CSS modules](https://github.com/outpunk/postcss-modules)

11.	[x] [Less](https://github.com/less/less.js)

12.	[x] [Eslint](https://github.com/eslint/eslint)
