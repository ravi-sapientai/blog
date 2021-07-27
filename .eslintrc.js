module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['import', 'jsx-a11y', 'react', 'react-hooks', '@typescript-eslint'],
  settings: {
    react: {
      version: 'detect', // detect react version
    },
  },
  rules: {
    'import/no-unresolved': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
  },
};
