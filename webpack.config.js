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
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],

  externals: {
      "react": "react",
      "react-dom": "react-dom"
  }*/

};

module.exports = wpconfig;
