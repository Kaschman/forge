const path = require('path')

const root = path.resolve(__dirname, '../..')
const baseConfig = require('./webpack.base.js')

const webpackConfig = baseConfig(root)

module.exports = webpackConfig
