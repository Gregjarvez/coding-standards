module.exports = {
  env: {
    node: true,
    es6: true,
    browser: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', './base'],
  plugins: ['react', '@emotion'],
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/no-find-dom-node': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
