// var moduleA=require('./a.js');
// main.js相当于是入口文件（首页）
// 如果导入的是js文件模块，那么后面的.js可以省略
// 在这引入a模块
var moduleA=require('./a');
// 在这里使用require引入b模块，只有将模块导入了，才能使用该模块暴露出来的方法和属性
var moduleB=require('./b.js');

// 在这里将css当做模块导进来
require('./css/style.css');
// 在这里将less当做模块导进来
require('./less/index.less');

console.log("我来自main.js");
// 使用a.js模块中的init方法
moduleA.init();
// 使用b.js模块中的util方法
moduleB.util();