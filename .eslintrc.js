module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript',
    'plugin:prettier/recommended',
  ],
  rules: {
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
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
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
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
}
