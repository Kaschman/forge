module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-flow',
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    ['module-resolver', {
      root: ['./src'],
      alias: {
        Components: './src',
        test: './test',
      },
    }],
    'react-docgen',
  ],
}
