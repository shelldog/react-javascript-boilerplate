/* Copyright(c) 2022-2023 Hajime - Kha Tran.
 *
 * Webpack configuration for development.
 *
 * */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = require('./webpack.core.js')({
  // tell the webpack this is for development.
  mode: 'development',

  // output: use chunk instead of hash for better performance.
  output: {
    filename: '[name].chunk.js',
  },

  // optimization: in development.
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  // plugins: in development.
  plugins: [
    // HtmlWebpackPlugin'll inject JavaScript codes into tags and put in HTML tag.
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(process.cwd(), 'public', 'index.html'),
    }),
  ],

  // devtool: boot your development.
  devtool: 'inline-source-map',
})
