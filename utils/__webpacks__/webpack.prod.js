/* Copyright(c) 2022-2023 Hajime - Kha Tran.
 *
 * Webpack configuration file for production.
 * */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = require('./webpack.core.js')({
  // mode: for production.
  mode: 'production',

  // output: use chunkhash for better performance.
  output: {
    filename: '[name].[chunkhash].js',
  },

  // optimization: configuration minimize.
  optimization: {
    minimize: true,
    minimizer: [
      // optimization for JavaScript for better performance.
      new TerserPlugin({
        terserOptions: {
          compress: {
            comparisons: false,
          },
          parse: {},
          mangle: true,
          output: {
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
      }),
    ],
  },

  // plugins: HtmlWebpackPlugin but with different configuration for production.
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(process.cwd(), 'public', 'index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],

  // devtool: source-map is recommended.
  devtool: 'source-map',
})
