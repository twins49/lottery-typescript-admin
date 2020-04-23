module.exports = {
  ignoreFiles: ['**/*.js', 'src/styles/element-variables.scss', 'theme/'],
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {
    'no-empty-source': null,
    'no-descending-specificity': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extend', 'mixin', 'include', 'content'],
      },
    ],
  },
}
