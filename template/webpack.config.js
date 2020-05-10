const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// you can just require .json, saves the 'fs'-hassle
const package = require('./package.json');
// 1. import default from the plugin module
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;

// 2. create a transformer;
// the factory additionally accepts an options object which described below
const styledComponentsTransformer = createStyledComponentsTransformer();

const isProduction = process.env.PRODUCTION === "true";

module.exports = {
	devtool: 'source-map',
	entry: './src/index.tsx',
	// webpack server configs.
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		host: '0.0.0.0',
		port: 3001,
		historyApiFallback: true
	},
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.min.js',
		publicPath: '/'
	},
	// tsx -> import App from './App'
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.scss'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					{
						loader: "babel-loader"
					}, {
						loader: 'awesome-typescript-loader',
						...isProduction ? {
							// do nothing.
						} : {
							options: {
								getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
							}
						}

					}
				]
			} , {
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					}, {
						loader: 'css-loader',
						options: {
							esModule: true,
							sourceMap: true
						}
					}
				]
			},{
				test: /\.svg$/,
				loader: 'react-svg-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			favicon: './public/favicon.ico',
		}), new CopyWebpackPlugin([
			{ from: 'public' }
		]),
		new MiniCssExtractPlugin()
	]
};