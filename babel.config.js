module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'], // Adjust this path as needed
          alias: {
            '@assets': './assets',
            '@components': './components',
            '@screens': './screens',
            // Add other aliases as needed
          },
        },
      ],
    ],
  };
};