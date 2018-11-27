// a模块需要使用d.js模块的cal方法，所以在使用之前先将该模块导入进来
var moduleD=require("./d");


// a模块

var anum=10;
function init(){
    // 在这里调用来自d.js模块的cal方法
    moduleD.cal(5111);
    console.log('我来自a.js');
}
// node.js中暴露访问接口的方式，将该模块的方法通过mudule.exports暴露给外部使用
module.exports= {
    init
}
