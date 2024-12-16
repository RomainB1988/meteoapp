const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

// Ajout des plugins pour supporter les modules modernes
environment.plugins.append('Provide', new webpack.ProvidePlugin({
  process: 'process/browser',
}))

module.exports = environment
