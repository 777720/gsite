module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    mocha: true,
    jquery: true,
  },
  rules: {
    semi: 0,
    'global-require': 0,
    camelcase: 0,
    'no-underscore-dangle': 0,
    'func-name': 0,
    'no-unused-vars': [1, { vars: 'all', args: 'none' }],
    'react/no-danger': 0,
    'react/prop-types': [2, { ignore: ['children', 'store', 'history', 'match'] }],
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/prefer-stateless-function': 0,
    'react/require-default-props': 0,
    'import/no-extraneous-dependencies': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/href-no-hash': 0,
  },
}
