module.exports = {
  extends: ['./css', 'stylelint-config-sass-guidelines'],
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        ignoreAtRules: ['else', 'forward', 'import', 'use'],
      },
    ],
    'scss/at-else-empty-line-before': 'never',
    // add deeper nesting to align with Airbnb css/scss style guide
    'max-nesting-depth': [
      2,
      {
        ignoreAtRules: ['each', 'media', 'supports', 'include'],
      },
    ],
  },
}
