const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  devtool: 'eval-source-map',

  mode: 'development',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Flashcards',
      template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],

  devServer: {
    contentBase: path.join(__dirname, 'docs')
  },
});
