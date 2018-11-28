module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  plugins: [
    'flowtype',
  ],
  rules: {
    'flowtype/define-flow-type': 1,
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['stories/**/*.js'] }],
    'import/prefer-default-export': ['off'],
    'react/destructuring-assignment': ['off'],
    'no-use-before-define': ['off'],
    'function-paren-newline': ['off'],
    'jsx-a11y/anchor-is-valid': ['off'],
    'no-param-reassign': ['error', { props: false }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    semi: ['error', 'never', { beforeStatementContinuationChars: 'never' }],
  },
}
