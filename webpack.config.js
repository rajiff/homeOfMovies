const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: (process.env.NODE_ENV || 'development'),
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(html)$/,
      use: {
        loader: 'html-loader'
      }
    }]
  },
  plugins: [
  ]
};