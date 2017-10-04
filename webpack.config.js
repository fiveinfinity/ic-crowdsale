const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  entry: {
    'app': [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/index'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
	filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
		test: /\.css$/,
		loaders: ExtractTextPlugin.extract({
			fallback: 'style-loader',
			use: 'css-loader?importLoaders=1&modules=true&localIdentName=[path]___[name]__[local]___[hash:ba se64:5]!postcss-loader'
		})
	  },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'assets/index.html'
    }),
    new ExtractTextPlugin("styles.css")
  ]
}
