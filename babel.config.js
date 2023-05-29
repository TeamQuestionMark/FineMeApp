module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: './src',
        rootPathPrefix: '~/',
        functions: ['jest.mock'],
      },
    ],
  ],
  env: {
    production: {
      plugins: [
        'transform-remove-console',
        'transform-react-remove-prop-types',
      ],
    },
  },
};
