// 模块里面的变量一般是在该模块内使用，不需要暴露出去
var num =10;

function cal(a){
    console.log(a+num);
}

module.exports={
    cal
}