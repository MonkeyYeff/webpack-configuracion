const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BabelMinifyPlugin = require('babel-minify-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'production',
	optimization: {
		minimizer: [new OptimizeCssAssetsWebpackPlugin()],
	},
	output: {
		filename: 'main.[contentHash].js',
	},

	module: {
		rules: [
			{
				test: /\.css$/i,
				exclude: /main\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /main\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.html$/i,
				loader: 'html-loader',
				options: {
					attributes: false,
					minimize: false,
				},
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							esModule: false,
							name: 'assets/[name].[ext]',
						},
					},
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: './index.html',
		}),

		new MiniCssExtractPlugin({
			filename: '[name].[contentHash].css',
			ignoreOrder: false,
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: './src/assets',
					to: 'assets/',
				},
			],
		}),
		new BabelMinifyPlugin(),
		new CleanWebpackPlugin(),
	],
};
