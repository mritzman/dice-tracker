var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
  context: APP_DIR,
  entry: {
    javascript: './js/app.js',
    html: './index.html'
  },
  devServer: {
    inline: true,
    port: 3000
  },
  output: {
    path: BUILD_DIR,
    filename: 'js/app.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loaders : ['react-hot', 'babel-loader']
      },
      {
        test: /\.html$/,
        include : APP_DIR,
        loader: "file?name=[name].[ext]",
      }
    ]
  }
};

module.exports = config;
