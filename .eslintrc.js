module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'eslint:recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'decorator-position'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
};
