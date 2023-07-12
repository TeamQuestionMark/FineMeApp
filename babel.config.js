module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'babel-plugin-root-import',
      {
        rootPathSuffix: './src',
        rootPathPrefix: '@/',
        functions: ['jest.mock'],
        relativeSourceLocation: true,
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
