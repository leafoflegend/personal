// Again with the use strict
'use strict'
const webpack = require('webpack')
    , nodeExternals = require('webpack-node-externals')
    // , CompressionPlugin = require('compression-webpack-plugin')
    , SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

module.exports = {
  entry: { app: '~/main.js' },
  output: {
    filename: 'prod.js',
    path: `${__dirname}/public`,
    libraryTarget: 'commonjs',
  },
  target: 'node',
  module: {
    // I find it odd you use babel-loader here, and babel.config.js over in the other build... maybe pick one and stick with it?
    rules: [{
      test: /jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: [
          ['env', { modules: false, loose: true }],
          'react',
          'stage-2',
        ],
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
    // ohhh fancy
    new SWPrecacheWebpackPlugin({
      cacheId: 'v1',
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'sw.js',
      minify: true,
      navigateFallback: 'https://eleniarvanitis.com/index.html',
      staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/],
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ],
  externals: [
    nodeExternals(),
    { 'firebase-functions': false },
  ]
}
