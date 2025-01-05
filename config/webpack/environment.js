const { environment } = require('@rails/webpacker');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Ajouter le CSS loader
environment.loaders.append('style', {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
});

// Ajouter le SCSS loader si nécessaire
environment.loaders.append('scss', {
  test: /\.(scss|sass)$/,
  use: ['style-loader', 'css-loader', 'sass-loader'],
});

environment.plugins.append(
  'MiniCssExtractPlugin',
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
  })
);

module.exports = environment;
