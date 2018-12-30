module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    node: true
  },
  globals: {
    Promise: true
  },
  plugins: ['node'],
  extends: ['airbnb-base'],
  rules: {
    'linebreak-style': 0,
    'global-require': 0,
    'arrow-parens': 0,
    'class-methods-use-this': 0,
    'comma-dangle': 0,
    'no-param-reassign': [2, { props: false }],
    'node/no-unsupported-features': 0,
    'import/no-commonjs': 0,
    'no-console': 1,
    'import/no-nodejs-modules': ['error', { allow: ['path', 'fs'] }]
  }
};
