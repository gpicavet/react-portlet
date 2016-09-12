var path = require('path');
var webpack = require('webpack');

var wpconfig = {
  devtool : 'cheap-module-source-map',
  entry: './src/main/js/index.js',
  output: { path: path.join(__dirname, 'target/react-portlet/js'),
	    filename: 'bundle.js'},

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
/*
  externals: {
      "react": "React",
      "react-dom": "ReactDOM"
  }
*/
};

module.exports = wpconfig;
