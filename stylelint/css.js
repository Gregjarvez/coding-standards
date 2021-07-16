module.exports = {
  extends: ['stylelint-config-idiomatic-order'],
  rules: {
    'declaration-property-unit-disallowed-list': {
      'font-size': ['px'],
      'line-height': ['px'],
    },
    'function-parentheses-space-inside': 'never-single-line',
    indentation: 2,
    'max-empty-lines': 2,
    'length-zero-no-unit': true,
    'order/order': [
      [
        'custom-properties',
        'dollar-variables',
        {
          type: 'at-rule',
          name: 'extend',
        },
        'declarations',
        {
          type: 'at-rule',
          name: 'include',
          hasBlock: false,
        },
        'rules',
      ],
    ],
  },
}
