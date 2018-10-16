'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: [
   'babel-polyfill', 'webpack-hot-middleware/client?reload=true',path.join(__dirname, 'client')
  ],
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    rules: [
      {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
         loader: 'babel-loader',
         options: { presets: ["react", "es2015", "stage-0"] }
       }]
    },
     {
      test: /\.json?$/,
      use: [{
        loader : 'json-loader'
      }]
    },
    { test: /\.(css)$/, use: [ 'style-loader','css-loader'] }
  ]
 }
};
