react-starter-kit
=================

基于webpack2 + ES6/7 + less + React15.5 + Redux3.6 + React-Router4.0 + react-hot-loader3 + antd

> 这个脚手架工程模板用于快速启动基于 React + Webpack 为技术栈的前端项目

---

Features 功能特性
-----------------

-	自动化流程

	-	可以解析 JSX 语法
	-	可以解析 ES6/ES7 语法新特性
	-	支持 LESS 预处理器
	-	区分开发环境和生产环境,代码中插入环境变量
	-	分离业务功能代码和公共依赖代码，单独打包第三方库
	-	支持编译 HTML 模板
	-	支持图片、图标字体等资源的编译
	-	自动补全文件后缀
	-	指定静态资源的url路径前缀--静态资源上cdn必备
	-	简化import路径
	-	配置favicon
	-	使用webpack 2自带的ES6模块处理功能(禁用了)
	-	编译前清空dist目录

-	开发流程

	-	实时的语法检测，基于airbnb/react -可配置编辑器
	-	实现组件级热更新
	-	实现代码的热替换，浏览器实时刷新查看效果
	-	编译完成自动打开浏览器

-	打包流程

	-	支持文件 MD5 戳,解决文件缓存问题
	-	CSS3 使用autoprefixer自动补全前缀
	-	支持一行命令产出待部署资源
	-	单独分离 CSS 样式文件(开发环境不分离-分离后不支持css的热更新)

-	测试任务

	-	支持 mocha 测试用例运行
	-	支持react官方工具库react-dom/test-utils的单元测试
	-	支持Enzyme的react-redux的测试
	-	支持Istanbul 覆盖率测试

---

快速开始
--------

```
$ git clone https://github.com/songzhengxu/react-starter-kit.git
$ cd react-starter-kit
$ npm install
```

#### 2.1 开发调试

```
//启动项目
$ npm run dev
```

将自动打开浏览器`http://127.0.0.1:3000`

#### 2.2 代码检查

```
$ 教程待写
```

#### 2.3 测试用例

```
$ npm run test //功能还没完善
```

#### 2.4 产出资源

```
$ npm run build
```

导出的代码在项目根目录中

---

目录结构
--------

```
react-starter-kit/
├─src                 // 源文件目录
│  ├─Action     
│  ├─Assets           // 图片资源
│  ├─Component
│  │  └─Common
│  ├─Config
│  ├─Iconfont         // 字体
│  ├─Reducer
│  ├─Style
│  ├─Template         // html模板
│  └─utils
└─test                // 测试用例目录
    ├─Action
    ├─Component
    └─Reducer
```

---

技术栈
------

1.	[x] [Webpack](https://webpack.github.io)
2.	[x] [React](https://facebook.github.io/react/)
3.	[x] [ES6](http://es6.ruanyifeng.com/)
4.	[x] [Redux](https://github.com/rackt/redux)
5.	[x] [React-router](https://github.com/rackt/react-router-redux)
6.	[x] [Babel](https://babeljs.io/)
7.	[x] [Autoprefixer](https://github.com/postcss/autoprefixer)
8.	[x] [PostCSS](https://github.com/postcss/postcss)
9.	[x] [CSS modules](https://github.com/outpunk/postcss-modules)
10.	[x] [Less](https://github.com/less/less.js)
11.	[x] [Eslint](https://github.com/eslint/eslint)

---

待解决的问题
------------

-	暂时没有适配mac 终端
-	antd 与 CSS Modules 冲突，暂时无法同时使用，现在禁用了CSS Modules
-	使用webpack 2自带的ES6模块处理功能与mocha测试配置冲突
-	测试
-	简化import路径 mocha测试不能识别 - ---
