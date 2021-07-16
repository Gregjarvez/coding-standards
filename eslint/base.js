module.exports = {
  env: {
    node: true,
    es6: true,
    browser: false,
    jest: true,
  },
  extends: [
    'airbnb-base',
    /**
     * FORMATTING
     */
    'prettier',
    'plugin:regexp/recommended',
    /**
     * SECURITY
     */
    'plugin:no-unsanitized/DOM',
  ],
  plugins: [
    /**
     * FORMATTING
     */
    'regexp',
    'woke',
    /**
     * SECURITY
     */
    'no-unsanitized',
    'no-wildcard-postmessage',
    'node',
  ],
  rules: {
    /**
     * FORMATTING
     */
    indent: 'off',
    'no-tabs': 'error',
    semi: ['error', 'never'],
    'semi-spacing': ['error', { before: false, after: true }],
    'no-extra-semi': 'off',
    'max-len': 'off',
    'no-alert': 'warn',
    'no-control-regex': 'off',
    'no-debugger': 'warn',
    'no-warning-comments': 'warn',
    strict: 'warn',
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
        groups: [
          'builtin',
          'external',
          'internal',
          'type',
          ['parent', 'sibling', 'index'],
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@dunelm/**',
            group: 'internal',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
      },
    ],
    'woke/profanity': 2,
    'operator-linebreak': 'off',
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'class-methods-use-this': 'off',
    curly: ['error', 'all'],
    'object-curly-newline': 'off',
    'function-paren-newline': 'off',
    'implicit-arrow-linebreak': ['off'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
      },
    ],
    quotes: ['error', 'single', { avoidEscape: true }],
    'require-await': 'error',
    yoda: ['error', 'never'],
    /**
     * SECURITY
     */
    'no-wildcard-postmessage/no-wildcard-postmessage': 1,
    'node/no-deprecated-api': 1,
    'node/no-extraneous-import': 1,
    'node/no-extraneous-require': 1,
  },
  overrides: [
    {
      files: ['**/*.config.js'],
      rules: {
        'no-var-requires': 'off',
        'global-require': 'off',
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: ['**/*.config.js'] },
        ],
      },
    },
    /**
     * TESTING
     */
    {
      files: [
        '**/__tests__/*.{test,spec}.[jt]s?(x)',
        '**/*.{pact,verifier}.[jt]s?(x)',
      ],
      plugins: ['jest', 'jest-dom', 'jest-formatting', 'testing-library'],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:jest-formatting/recommended',
        'plugin:jest-dom/recommended',
        'plugin:testing-library/react',
      ],
      rules: {
        'jest/require-top-level-describe': 'error',
        'jest/expect-expect': 'error',
        'jest/no-alias-methods': 'error',
        'jest/no-focused-tests': 'warn',
        camelcase: 'off',
        'no-empty-function': 'off',
        'ban-ts-comment': 'off',
        'ban-ts-ignore': 'off',
        'no-only-tests/no-only-tests': 'error',
        'security/detect-non-literal-fs-filename': 'off',
        'react/display-name': 'off',
        'jest/no-conditional-expect': 'off',
        'jest/no-try-expect': 'off',
        'no-console': 'off',
        'react/prop-types': 'off',
        'testing-library/no-await-sync-events': 'error',
        'testing-library/no-manual-cleanup': 'error',
        'testing-library/no-unnecessary-act': 'error',
        'testing-library/no-wait-for-multiple-assertions': 'error',
        'testing-library/no-wait-for-side-effects': 'error',
        'testing-library/no-wait-for-snapshot': 'error',
        'testing-library/prefer-explicit-assert': 'error',
        'testing-library/prefer-presence-queries': 'error',
        'testing-library/prefer-user-event': 'error',
        'testing-library/prefer-wait-for': 'error',
      },
    },
    {
      files: ['**/tests/**/*.[jt]s'],
      plugins: ['testcafe', 'no-only-tests'],
      extends: ['plugin:testcafe/recommended'],
      rules: {
        camelcase: 'off',
        'no-empty-function': 'off',
        'ban-ts-comment': 'off',
        'ban-ts-ignore': 'off',
        'no-only-tests/no-only-tests': 'error',
        'security/detect-non-literal-fs-filename': 'off',
      },
    },
  ],
  settings: {
    jest: {
      version: 'detect',
    },
  },
}
