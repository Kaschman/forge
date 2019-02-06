const path = require('path')

const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    sourceMap: true,
  },
}

const postCSSLoader = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    sourceMap: true,
  },
}

module.exports = (root) => {
  const PATHS = {}
  PATHS.root = root
  PATHS.src = path.resolve(PATHS.root, 'src')
  PATHS.dist = path.resolve(PATHS.root, 'dist')

  return {
    entry: ['@babel/polyfill', path.resolve(PATHS.src, 'index.js')],
    output: {
      path: PATHS.dist,
      filename: 'index.js',
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
          test: /\.module\.scss$/,
          use: [
            'style-loader', // creates style nodes from JS strings
            CSSModuleLoader,
            postCSSLoader,
            'sass-loader', // compiles Sass to CSS, using Node Sass by default
          ],
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
