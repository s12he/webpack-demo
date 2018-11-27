**该demo没有上传依赖包,下载方法该文本最后有方法**

# 首先如何使用webpack
[官网](https://www.webpackjs.com/)

+ 安装
>`cnpm install webpack -g` (**全局**)
>  
>把依赖写入package.json 适用于开发模块或项目:
>
>`npm install webpack --save-dev `
>
>注意：使用webpack4.0版本可能还需要安装webpack-cli 
>
>安装方法 `cnpm install webpack-cli -g`

# 需要引用的模块

![图片](https://i.imgur.com/kiBXtnW.jpg)

	// a模块
	var num =10;
	function cal(a){
   	 console.log(a+num);
	}
	// node.js中暴露访问接口的方式，将该模块的方法通过mudule.exports暴露给外部使用
	module.exports={
  	  cal
	}

# 入口文件main.js

	// 如果导入的是js文件模块，那么后面的.js可以省略
	var moduleA=require('./a');
	// 在这里将css当做模块导进来
	require('./css/style.css');
	// 在这里将less当做模块导进来
	require('./less/style.less');
	// 使用a.js模块中的init方法
	moduleA.init();

# 操作步骤

+ 把需要引用的模块放在一个目录下
+ 然后再引用模块文件外使用命令行,`npm init`引导你构建package.json文件
+ 然后写一个`webpack.config.js`配置文件

**注意:路径前面一定要加 ./**

	    // 引入node.js的路径模块，解决路径查找问题
		const path = require('path');
		// 配置项
		module.exports = {
		// entry：入口文件，需要打包的文件
  		   entry: './src/main.js',
  		// 出口：指定将入口文件处理后输出到哪个文件夹下，和处理后的文件名
  		   output: {
    	// path会自动帮你解决打包的路径问题，会打包到当前目录的dist目录下
   		   path: path.resolve(__dirname, 'dist'),
    	   filename: 'my-first-webpack.bundle.js'
  		   },
		// 如果是处理非JS文件，则需要在配置中配置好对应的规则
 		   module:{
			// test指的是匹配所有的css文件，将匹配到的css文件使用style-loader和css-loader来处理打包,这两个参数顺序不能写反了
   		 	 rules: [
     	 	{ test: /\.css$/, use:['style-loader','css-loader']},
			{ test: /\.less$/, use:['style-loader','css-loader','less-loader']}
				]
 			},
		   plugins:[
    		// HtmlWebpackPlugin是一个构造函数，通过实例化来启用该插件
    		// 将该html模板页导进来并构建
    			new HtmlWebpackPlugin({
      				template:'./src/index.html'
    			})
  			],
		   devServer: {
     			contentBase: './dist'
 		   }
		};

+ 处理css文件，还需要导入两个组件：
>`npm install style-loader  --save-dev`
> 
>`npm install css-loader  --save-dev`
>
>--save-dev指的是首次在该项目中使用时，将组件写入到pageage.json中，告诉webpack该项目需要依赖以上组件。
>
>然后在webpack.config.js添加配置项:
>>`module:{内容如上}`
>
>还需要在入口文件main.js中将css文件当做模块导入进来
>>`require('./css/style.css');`

+ 处理less文件，还需要导入两个组件：
>`cnpm i less --save-dev`
> 
>`cnpm i less-loader --save-dev`
>
>在webpack.config.js中配置less解析:
>>在module配置项里,rules数组中添加以下配置
>
>>`{ test: /\.less$/, use:['style-loader','css-loader','less-loader']}`
>
>在入口文件main.js中将less文件当做模块导入进来
>>`require('./less/style.less');`

+ 指令打包
> 配置文件如果叫webpack.config.js 打包直接使用webpack指令文件
>
>配置文件如果不是在一个目录或不是以上名称，按照如下方式：$ webpack --config=配置文件路径/配置文件.js  

+ 如果需要网站自动刷新,则省去上个步骤,那就还需要把HTML也当做模板来构建

>将HTML模板页也放入到项目的src目录中
>
>下载HTML模板构建插件:
>>`cnpm install html-wepback-plugin --save-dev`
>
>在项目的webpack.config.js中导入该插件:
>>`const HtmlWebpackPlugin = require('html-webpack-plugin');`
>
>在webpack.config.js启用并配置如何解析该模板,在mudule后面同级中添加如下配置项：
>>`plugins:[内容如上]`
>
>因为去掉了打包指令,所以dist文件夹并不会生成,如需要生成,webpack.config.js中添加配置项:
>>`devServer{内容如上}`
>
>自动刷新功能还需要依赖webpack，所以还得局部安装一次webpack项目:
>>`cnpm install webpack --save-dev`
>
>因为webpack-dev-server需要依赖webpack自动构建该项目，所以在webpack.config.js里要导入webpack
>>`const  webpack=require("webpack");`
>
>启动服务器，都需要输入`webpac-dev-server --open`,可以整合到package.json中，用npm start命令代替
>>在scripts对象中添加:`"start": "webpack-dev-server --open"`

+ 最后cnpm start

# 如何批量下载该项目的所有的依赖包：
在该项目文件夹中：`cnpm  install`

执行该命令后，它会自动到该项目的package.json中将所以的依赖包给下载