const isProd = ({NODE_ENV}) => NODE_ENV === JSON.stringify('production')
const isHot = env => !isProd(env)

module.exports = {isProd, isHot}