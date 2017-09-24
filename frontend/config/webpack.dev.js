const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

module.exports = webpackMerge(commonConfig, {
  output: {
    filename: '[name]-[hash].js',
    publicPath: 'http://0.0.0.0:3004/assets/gsite/',
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre',
      },
    ],
  },
  devtool: 'source-map',
  devServer: {
    hot: true,
    disableHostCheck: true,
    historyApiFallback: {
      rewrites: [{ from: '^/apps/gsite(/.*)?', to: '/assets/gsite/blog.html' }],
    },
    headers: { 'Access-Control-Allow-Origin': '*' },
    host: '0.0.0.0',
    port: 3004,
    stats: {
      assets: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: true,
    },
  },
})
