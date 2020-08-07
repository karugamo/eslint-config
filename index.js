module.exports = {
    env: {
      browser: true,
      es2020: true
    },
    extends: [
      'plugin:react/recommended',
      'prettier',
      'prettier/react',
      'prettier/standard'
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 11,
      sourceType: 'module'
    },
    plugins: ['prettier', 'react'],
    rules: {
      'react/prop-types': 0,
      'space-before-function-paren': 'off',
      'prettier/prettier': [
        'error',
        {
          bracketSpacing: false,
          jsxBracketSameLine: false,
          printWidth: 80,
          semi: false,
          singleQuote: true,
          tabWidth: 2,
          trailingComma: 'none',
          useTabs: false
        }
      ]
    }
  }
  