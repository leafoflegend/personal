'use strict'
const webpack = require('webpack')
  , nodeExternals = require('webpack-node-externals')
  , babel = require('./babel.config')
  , CompressionPlugin = require('compression-webpack-plugin')
  , UglifyJsPlugin = require('uglifyjs-webpack-plugin')
  , SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

module.exports = {
  entry: {
    app: './main.js'
  },
  output: {
    filename: 'prod.js.gz', // <-- Important
    path: `${__dirname}/public`,
    libraryTarget: 'commonjs', // <-- Important
  },
  target: 'node', // <-- Important
  module: {
    rules: [{
      test: /jsx?$/,
      exclude: /node_modules/,
      use: babel(process.env),
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
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
    }),
    new UglifyJsPlugin({
      exclude: /node_modules/
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.(js|css|html)$/,
      threshold: 10240,
      minRatio: 0.8
    }),
  ],
  externals: [
    nodeExternals(),
    {'firebase-functions': false},
  ] // <-- Important
}