module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        jsxBracketSameLine: true,
        semi: false,
        arrowParens: 'avoid',
      },
    ],
    semi: [2, 'never'],
    'no-plusplus': 'off',
    'class-methods-use-this': 'off',
    // 'lines-between-class-members': 'off',
    'no-unused-expressions': 0,
    'no-shadow': [
      'error',
      {
        allow: ['state'],
      },
    ],
    camelcase: 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'prefer-destructuring': [
      'error',
      {
        object: false,
        array: false,
      },
    ],
    'func-names': 0,
    'no-restricted-syntax': 'off',
    'global-require': 0,
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
