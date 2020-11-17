module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['./', 'prettier/@typescript-eslint'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error']
  }
}
