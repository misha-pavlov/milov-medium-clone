module.exports = {
  jsxBracketSameLine: true,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 120,
  tabWidth: 2,
  bracketSpacing: true,
  parser: 'flow',
  semi: true,
  useTabs: false,
  arrowParens: 'avoid',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      options: { parser: 'typescript' }
    }
  ]
};
