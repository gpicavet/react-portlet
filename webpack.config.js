var path = require('path');
var webpack = require('webpack');

var wpconfig = {
  devtool : 'cheap-module-source-map',
  entry: './src/main/js/index.js',
  output: { 
	path: path.join(__dirname, 'target/react-portlet/js'),
	filename: 'bundle.js',
	library: 'Main',
	libraryTarget: 'umd'},

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
  plugins:[
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
/*
  externals: {
      "react": "React",
      "react-dom": "ReactDOM"
  }*/

};

module.exports = wpconfig;
