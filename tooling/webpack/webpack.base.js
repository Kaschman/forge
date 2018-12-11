const path = require('path')

module.exports = (root) => {
  const PATHS = {}
  PATHS.root = root
  PATHS.src = path.resolve(PATHS.root, 'src')
  PATHS.dist = path.resolve(PATHS.root, 'dist')

  return {
    entry: ['@babel/polyfill', path.resolve(PATHS.src, 'index.js')],
    output: {
      path: PATHS.dist,
      filename: 'index.bundle.js',
      library: 'forge',
      libraryTarget: 'umd',
    },
    devtool: 'inline-source-map',
    // externals: ['lodash', 'moment', 'react'],
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.jsx?$/,
          loader: 'eslint-loader',
          exclude: /node_modules/,
          options: {
            fix: true,
          },
        },
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                camelCase: true,
              },
            },
            // { loader: 'postcss-loader' },
          ],
        },
        {
          test: /\.js(x?)$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      modules: [PATHS.src, 'node_modules'],
      extensions: ['.js', '.jsx'],
    },
  }
}
