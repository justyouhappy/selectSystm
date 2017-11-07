var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");//css
module.exports = {
	entry: './src/js/entry.jsx',
	output: {
		path: __dirname + '/static/',
		publicPath: 'http://localhost:8080/static/',
		filename: 'index.js'
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
			{ test: /\.(jpg|png)$/, use: ['url-loader'] }
		]
	},
	devServer: {
		port: 8080,
		historyApiFallback: true,
		inline: true, //注意：不写hot: true，否则浏览器无法自动更新；也不要写colors:true，progress:true等，webpack2.x已不支持这些
	},
	resolve: {
		modules: ['node_modules'],
		extensions: ['.js', '.jsx'],
	},
	plugins: [
		new ExtractTextPlugin('bundle.css'),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
			  warnings: false
			}
		}),
		new webpack.DefinePlugin({
			'process.env':{
			  'NODE_ENV': JSON.stringify('production')
			}
		})
	]
}


