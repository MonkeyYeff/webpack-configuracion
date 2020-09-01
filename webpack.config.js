const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	optimization: {
		minimizer: [new OptimizeCssAssetsWebpackPlugin()],
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
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: './index.html',
		}),

		new MiniCssExtractPlugin({
			filename: '[name].css',
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
		new CleanWebpackPlugin(),
	],
};
