module.exports = {
    env: {
      node: true,
      es6: true,
      jest: true,
    },
    extends: 'eslint:recommended',
    ignorePatterns: ["test/**"],
    overrides: [
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      tsconfigRootDir: __dirname,
      project: "tsconfig.json",
      sourceType: "module"
    },
    plugins: ['@typescript-eslint'],
    rules: {
      'no-console': 'error',
      'no-unused-vars': 'error',
      'no-async-promise-executor': 'off',
      'quotes': 'error',
      'no-var': 'error',
      'no-undef': 'error',
      'camelcase': 'error',
      'no-const-assign': 'error'
    }
  }
  