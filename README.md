react-starter-kit
=================

基于webpack4 + ES6/7 + less + React16 + Redux4 + React-Router4 + react-hot-loader4 + antd

> 这个脚手架工程模板用于快速启动基于 React + Webpack 为技术栈的前端项目

---

更新日志
--------

20180725
--------

-	升级所有依赖到最新版 具体查看package.json
-	主要升级webpack4
-	升级react16
-	升级antd到3.7
-	修复了生产环境还会显示redux tools的bug

> 时隔一年，再次更新，在这一年中，我自己一直用dva全家桶 不管是rn还是wxapp 都是用的dva全家桶，那为什么还更新这个项目呢？ 最主要还是为了学习webpack的配置， 想当初这个项目也是耗时2个月硬啃英文文档；现在使用任何脚手架都能基于webpack扩展自己想要的功能，也一眼能看懂别人配置的规则是想干嘛；所以还是跟上升级的步伐，学不动也要学呀，与其说这是一个好的脚手架，倒不如说这是一个学习webpack最好的案例， 对了，现在本脚手架打包只需要3s左右，上一个版本还需要17s呢

20170915
--------

-	1.引入cdn 优化webpack编译效率

> 常用的库，通过cdn的方式引入，而不再走webpack编译，大大提升了编译和打包时间

20170814
--------

-	1.引入CSS Modules 且分离antd的less不走CSS Modules编译

20170803
--------

-	1.加入babel-polyfill
-	2.修复cross-env 未生效的bug
-	3.加入stage-2支持，用es2017的语法解决react bind this的问题，

> 详细见 src\Component\From.jsx 中的代码，直接用stage-2的写法，事件不用再绑定this;

20170725
--------

-	1.使用cross-env来设置跨平台设置环境变量
-	2.统一window,mac的开发运行命令
-	3.配置允许局域网访问 http://ip:port

20170719
--------

-	1.移除react-intl国际化需求
-	2.严格按照Angular 规范书写Commit message

20170710
--------

-	1.语法检查严格按照airbnb规范
-	2.路由代码拆分，实现页面[按需加载](https://reacttraining.cn/web/guides/code-splitting)

> 1.语法检查严格是好事，至少能够按照规则写出规范的代码，看着都很舒心，慢慢的就会接受并习惯它，但是也不能完全按照它的规范来，以免适得其反，都可以通过配置文件忽略某些规则，或者跳过某些文件，代码行等，这样下来，才有一套自己的代码规范 2.路由实现代码拆分以后，打包的文件小了，打包的时间也少了，打包时间优化从71s-36s-17s. 优化从未停止！

20170707
--------

-	1.组件拆分为容器组件和视图组件
-	2.新增react-intl来达到国际化多语言

> 拆分容器组件和视图组件，能让我们更好的进行组件的代码复用，叫法挺多的，什么智能组件和木偶组件，容器组件和展示组件

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
	-	使用webpack 2自带的ES6模块处理功能(禁用了-可配置)
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
$ 编译和打包都会自动运行代码检查
  也可以配置编辑器,在编码时实时检查语法 如: atom需要安装linter和linter-eslint这两个插件, 装好后重启生效.
```

> 注意：如果有语法错误，则浏览器控制台会报errors，则热替换不会生效，切记！

#### 2.3 测试用例

```
$ npm run test 				// 运行单元测试
$ npm run coverage 		// 运行覆盖率测试
```

> 单元测试在控制台输出报告，覆盖率测试将在项目根目录中创建coverage文件夹来输出测试报告， 进入coverage/lcov-report 中，打开index.html 能够在浏览器中查看更加详细的覆盖率测试报告

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
