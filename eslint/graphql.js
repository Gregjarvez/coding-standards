module.exports = {
  files: ['*.graphql'],
  parser: '@graphql-eslint/eslint-plugin',
  plugins: ['@graphql-eslint'],
  rules: {
    'prettier/prettier': [
      2,
      {
        parser: 'graphql',
      },
    ],
  },
}
