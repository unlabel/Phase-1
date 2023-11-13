module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ['jest'],
  rules: {
    'operator-linebreak': 0,
    'no-use-before-define': 0,
    'comma-dangle': 0,
    'implicit-arrow-linebreak': 0,
  },
};
