const {isHot} = require('./env.config')

const babel = module.exports = env => ({
  loader: 'babel-loader',
  options: {
    presets: [
      ["transform-react-jsx", { "pragma": "h" }],
      'stage-2',
      'react',
    ],
    plugins: isHot(env) && ['react-hot-loader/babel']
  }
})