const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const RemoveUnusedStyles = require('../index.js');

module.exports = {
	entry: path.join(__dirname, 'index.js'),
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader!sass-loader'
				})
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
	},
	plugins: [
		new RemoveUnusedStyles({
			outputPath: './build'
		}),
		new ExtractTextPlugin({
			filename: 'styles.css',
			allChunks: true
		})
	],
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js'
	}
}