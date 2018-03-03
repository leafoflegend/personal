// why do we need use strict?
'use strict'
const webpack = require('webpack')
    , babel = require('./babel.config')
    , {isHot, isProd} = require('./env.config')

const config = env => ({
  entry: entries(env, './main.js'),
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/public`,
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: [ '.jsx', '.js', '.json' ],
    // Like the aliasing of home a lot.
    alias: { '~': __dirname }
  },
  devServer: devServer(env),
  module: {
    rules: [{
      test: /jsx?$/,
      exclude: /node_modules/,
      use: babel(env),
    },
    {
      test: /\.(jpeg|jpg|png|)$/,
      use: 'url-loader',
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    {
      test: /\.(txt|md|markdown)$/,
      use: 'raw-loader',
    }]
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  plugins: plugins(env),
})

const entries = (env, entry) =>
  isHot(env)
    ? ['react-hot-loader/patch', entry]
    : entry

const plugins = env => isHot(env) ? [
  new webpack.HotModuleReplacementPlugin,  // Enable HMR globally
] : []

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
