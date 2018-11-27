// a模块

    var bnum=10;
    function util(){
        console.log('我来自b.js');
    }
    // exprots是mudule对象的一个方法，该方法将里面的方法或属性暴露给外界使用。
    module.exports= {
        util
    }
