
// 从jsdom 8.0.1升级到10.1.0
// jsdom 10.1.0修改了部分api

// const jsdom = require('jsdom').jsdom;

// 获取JSDOM方法，用于生成JSDOM对象
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const exposedProperties = ['window', 'navigator', 'document'];

// 生成JSDOM对象
const dom = new JSDOM(``);

/*
global.document = jsdom('');
global.window = document.defaultView;
*/
// 获取window 对象
global.window = dom.window;
// 获取 global 对象
global.document = window.document;

/*
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});
*/
Object.keys(dom.window).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = dom.window[property];
  }
});

global.navigator = {
  userAgent: 'node.js',
};

const documentRef = document;
