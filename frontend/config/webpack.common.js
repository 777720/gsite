const webpack = require('webpack')
const initEntry = require('../initEntry')

const config = {
  entry: {
    vendor: ['react', 'react-dom'],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|eot|svg|ttf|woff|woff2|gif)$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
}

initEntry(config)
module.exports = config
