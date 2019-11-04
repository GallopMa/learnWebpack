const path = require('path');

// plugin 可以在webpack 运行到某个时候，帮你做一些事情
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

// context 目录路径 默认使用当前目录，为绝对路径
var context = path.resolve(__dirname, 'dist');
console.log('路径：', path.resolve(__dirname, 'dist'));

module.exports = {
	mode: 'development',
	// entry 对象是用于 webpack 查找、启动、并构建bundle。其上下文是入口文件所处的目录的绝对路径的字符串
	entry: {
		main: './src/index.js',
		// sub: './src/index.js'
	},
	module: {
		rules: [
			{
				test: /\.(jpg|jpeg|svg|png|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'images',
						limit: 102400
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader','css-loader']
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
							// modules: true
						}
					},
					'postcss-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(eot|ttf|svg|woff|woff2)$/,
				use: {
					loader: 'file-loader'
				}
			}
			// {
			// 	test: /\.(jpg|png|gif)$/,
			// 	use: {
			// 		loader: 'file-loader',
			// 		options: {
			// 			name: '[name].[ext]',
			// 			outputPath: 'images'
			// 		}
			// 	}
			// }
		]
	},
	// 指示 webpack 如何去输出、以及在哪里输出 bundle、asset和其它打包或使用 webpack 载入的任何内容
	output: {
		// publicPath: 'https://www.baidu.com', // 为项目添加公共路径
		// filename: '[name].bundle.js', // 使用 entry 里面的 main/sun 作为name名字
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
		// path: context
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		// 新版本 CleanWebpackPlugin 只接受一个对象作为参数，所以传数组会报错，
		// 如果什么都不传，默认删除output.path目录下的文件
		new CleanWebpackPlugin()
	]
};