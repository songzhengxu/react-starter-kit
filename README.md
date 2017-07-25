react-starter-kit
=================

基于webpack2 + ES6/7 + less + React15.5 + Redux3.6 + React-Router4.0 + react-hot-loader3 + antd

> 这个脚手架工程模板用于快速启动基于 React + Webpack 为技术栈的前端项目

---

更新日志
--------

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

---

待解决的问题
------------

-	使用webpack 2自带的ES6模块处理功能与mocha测试配置冲突 (已解决)

> 引起冲突的原因： webpack hot-module-replacement需要利用es6 import，因此我们需要在presets选项里面将es2015的modules选项设置为false,默认为commonjs 但是mocha测试(在Node运行环境下)的时候需要想import 转为为commonjs风格的require 解决方法： 利用babel在不同环境变量的情况下读取不同options的特性 测试的时候，将临时环境变量设置为test, 在babelrc文件里面的env选项下，配置好环境变量为test的时候需要使用的presets和plugins 开发的时候，将临时环境变量设置为development, 在没有配置的情况狂下，babelrc默认的环境变狼为development

-	带有路由的组件，在mocha测试时，不能渲染到dom (已解决)

> 组件带有路由的情况下需要将组件包裹在 <MemoryRouter>里面，直接放到测试中运行。 而不是用<MemoryRouter>生成新的组件后再放到测试中运行。具体查看测试用例

-	redux组件在mocha测试时，不能渲到dom (已解决)

> 可以通过自己创建一个store,创建store的时候，即使只有一个reducer也要用combineReducers包裹好再创建。 创建好store后，利用<Provider>生成一个组件，放到测试中即可。

-	jsdom8.0.1升级到jsdom10.1.0 (已解决)

> jsdom10.1.0相对于8.0.1来说，更改了部分api，根据官网api，修改setup.js即可。 setup.js： https://github.com/lelandrichardson/enzyme-example-mocha/blob/master/test/.setup.js jsdom 10.1.0： https://github.com/tmpvar/jsdom

-	当引入less时，mocha测试报错,

> 由于antd的模块配置是使用less按需加载，所以是动态引入less文件，以及我们自己引入的less文件，组件都不能通过测试，我们需要配置mocha 忽略less 文件

Install it:

```js
npm install --save-dev ignore-styles
```

Run tests without styles:

```js
mocha --require ignore-styles
```

-	简化import路径 mocha测试不能识别 - ---

> 使用 babel-plugin-module-resolver 解决
