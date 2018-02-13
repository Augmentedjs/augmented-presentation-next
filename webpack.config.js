const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/presentation.js',
  context: __dirname,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'augmented-next-presentation.js',
    publicPath: '/dist/',
    library: "Presentation",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-2']
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map',
  plugins: [
    new UglifyJsPlugin({
    uglifyOptions: {
      ie8: false,
      ecma: 8
    }
  })
  ]
};
