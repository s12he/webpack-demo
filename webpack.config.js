const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack=require("webpack");

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.bundle.js'
	},
	module: {
		rules: [
			{ test: /\.css$/, use:['style-loader','css-loader']},
			{ test: /\.less$/, use:['style-loader','css-loader','less-loader']}
		]
	},
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
	
};