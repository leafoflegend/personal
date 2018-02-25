'use strict'
const webpack = require('webpack')
  , nodeExternals = require('webpack-node-externals')
  , CompressionPlugin = require('compression-webpack-plugin')
  , UglifyJsPlugin = require('uglifyjs-webpack-plugin')
  , SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
  , HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './main.js'
  },
  output: {
    filename: 'prod.js', // <-- Important
    path: `${__dirname}/public`,
    libraryTarget: 'commonjs', // <-- Important
  },
  target: 'node', // <-- Important
  module: {
    rules: [{
      test: /jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['env', 'react', 'stage-2'],
      }
    }, {
      test: /\.(jpeg|jpg|png|)$/,
      use: 'url-loader',
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(txt|md|markdown)$/,
      use: 'raw-loader',
    }, {
      test: /\.json$/,
      use: 'json-loader'
    }]
  },
  resolve: {
    extensions: [ '.jsx', '.js', '.json' ],
    alias: { '~': __dirname },
  },
  plugins: [
    new SWPrecacheWebpackPlugin({
      cacheId: 'v1',
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'sw.js',
      minify: true,
      navigateFallback: 'https://eleniarvanitis.com/index.html',
      staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/],
    }),
    new UglifyJsPlugin({
      exclude: /node_modules/
    }),
    new CompressionPlugin({
      test: /\.(js|css|html)$/,
      algorithm: 'gzip',
      threshold: 10240,
      minRatio: 0.8
    }),
  ],
  externals: [
    nodeExternals(),
    { 'firebase-functions': false },
  ] // <-- Important
}

{
  new HtmlWebpackPlugin({
    template: './public/index.html',
    inject: 'body',
  })
}