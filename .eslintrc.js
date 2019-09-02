module.exports = {
  env: {
    "node": true, // this is the best starting point
    "browser": true, // for react web
    "es6": true // enables es6 features
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
  },
  "env": {
    "node": true, // this is the best starting point
    "browser": true, // for react web
    "es6": true // enables es6 features
  },
};
