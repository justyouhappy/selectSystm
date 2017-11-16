var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");//css
var ImageminPlugin = require('imagemin-webpack-plugin').default;//压缩图片
var config = require('./config.js');
var url = process.env.NODE_ENV !== 'production' ?  config.startUrl : config.buildUrl
var plugins = [
	new ExtractTextPlugin('css/bundle.css'),
	new webpack.DefinePlugin({
		'process.env':{
		  'NODE_ENV': JSON.stringify('process.env.NODE_ENV')
		}
	}),
	new ImageminPlugin({
		disable: process.env.NODE_ENV !== 'production', 
		pngquant: {
		  quality: '95-100'
		}
	})
]
if(process.env.NODE_ENV === 'production') {
	plugins.push(new webpack.optimize.UglifyJsPlugin({
		beautify: false,
		// 删除所有的注释
		comments: false,
		compress: {
			  // 在UglifyJs删除没有用到的代码时不输出警告  
			  warnings: false,
			  // 删除所有的 `console` 语句
			  // 还可以兼容ie浏览器
			  drop_console: true,
			  // 内嵌定义了但是只用到一次的变量
			  collapse_vars: true,
			  // 提取出出现多次但是没有定义成变量去引用的静态值
			  reduce_vars: true,
		  }
  }));
}
module.exports = {
	entry: './src/js/entry.jsx',
	output: {
		path: __dirname + '/statics/',
		publicPath: process.env.NODE_ENV === 'production' ? '../': 'http://localhost:8080/statics/',
		filename: 'js/index.js'
	},
	module: {
		rules: [
			{
				test: /.(scss)|(css)$/, use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				query: {
					presets: [
						require.resolve('babel-preset-es2015'),
						require.resolve('babel-preset-react'),
						require.resolve('babel-preset-stage-0'),
                    ],
                    plugins: [["import", { libraryName: "antd", style: "css" }]]
				}
			},
			{ test: /\.(jpg|png)$/, use: ['url-loader?limit=8192&name=image/[hash:8].[name].[ext]'] },			
		]
	},
	devServer: {
		host: "0.0.0.0",
		port: 8080,
		disableHostCheck: true,
		proxy: {
			"/notice/*": {
				target: url,
				secure: false,
				changeOrigin: true
			},
			"/login/*": {
				target: url,
				secure: false,
				changeOrigin: true
			},
			"/update/*": {
				target: url,
				secure: false,
				changeOrigin: true
			},
			"/search": {
				target: url,
				secure: false,
				changeOrigin: true
			},
			"/pageview": {
				target: url,
				secure: false,
				changeOrigin: true
			},
			"/controller": {
				target: url,
				secure: false,
				changeOrigin: true
			}
		},
		historyApiFallback: true,
		inline: true, //注意：不写hot: true，否则浏览器无法自动更新；也不要写colors:true，progress:true等，webpack2.x已不支持这些
	},
	resolve: {
		modules: ['node_modules'],
		extensions: ['.js', '.jsx'],
	},
	plugins,
}


