const { environment } = require('@rails/webpacker');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

environment.loaders.append('style', {
  test: /\.css$/,
  use: [MiniCssExtractPlugin.loader, 'css-loader'],
});

environment.plugins.append(
  'MiniCssExtractPlugin',
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
  })
);

module.exports = environment;
