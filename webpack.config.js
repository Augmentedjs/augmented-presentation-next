const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//const HtmlWebPackPlugin = require("html-webpack-plugin");

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
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
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
    sourceMap: true,
    uglifyOptions: {
      ie8: false,
      ecma: 8
    }
  })
  ]
};

/*
{
  test: /\.html$/,
  use: [
    {
      loader: "html-loader",
      options: { minimize: true }
    }
  ]
}
*/
/*
plugins: [
  new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./public/out.html"
  }),
  new UglifyJsPlugin({
  uglifyOptions: {
    ie8: false,
    ecma: 8
  }
})
]
*/
