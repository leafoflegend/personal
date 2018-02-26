'use strict'
const webpack = require('webpack')
  , babel = require('./babel.config')
  , { dirname } = require('path')
  , parent = dirname(__dirname)
  , nodeExternals = require('webpack-node-externals')
  , { isHot, isProd } = require('./env.config')
  , SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

const config = env => ({
  entry: entries(env, `${parent}/main.js`),
  output: {
    filename: 'bundle.js',
    path: `${parent}/public`,
  },
  context: parent,
  target: 'node',
  devtool: 'inline-source-map',
  resolve: {
    extensions: [ '.jsx', '.js', '.json' ],
    alias: { '~': parent }
  },
  devServer: devServer(env),
  module: {
    rules: [{
      test: /jsx?$/,
      exclude: /node_modules/,
      use: babel(env),
    }, {
      test: /\.(jpeg|jpg|png|)$/,
      use: 'url-loader',
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(txt|md|markdown)$/,
      use: 'raw-loader',
    }]
  },
  plugins: plugins(env),
  externals: [
    nodeExternals(),
    {'firebase-functions': true},
  ]
})

const entries = (env, entry) =>
  isHot(env)
    ? ['react-hot-loader/patch', entry]
    : entry

const plugins = env => isHot(env) ? [
  new webpack.HotModuleReplacementPlugin,  // Enable HMR globally
] : [
  new SWPrecacheWebpackPlugin({
    cacheId: 'v1',
    dontCacheBustUrlsMatching: /\.\w{8}\./,
    filename: 'sw.js',
    minify: true,
    navigateFallback: 'https://eleniarvanitis.com/index.html',
    staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/],
  }),
]

function devServer(env) {
  if (isProd(env)) return
  const {FIREBASE_SERVE_URL} = env
  return {
    hot: true,
    proxy: FIREBASE_SERVE_URL && {
      "/": FIREBASE_SERVE_URL
    }
  }
}

module.exports = config(process.env)