module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'react/react-in-jsx-scope': 'off',
    // camelcase: ['error', { properties: 'never' }],
    camelcase: [2, { properties: 'never' }],
    // camelcase: ['error', { properties: 'never' }],
    'react/jsx-props-no-spreading': 'off',
    'no-param-reassign': [2, { props: false }],
    'object-curly-newline': 'off',
    'react/button-has-type': ['error', { reset: true }],
    'linebreak-style': 0,
    'react/self-closing-comp': 'off',
    // implicit-arrow-linebreak: ["error", "beside"]
  },
};

// 'plugin:react/recommended', 'airbnb'
