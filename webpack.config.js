const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  context: __dirname,
  target: "web",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'augmented-next-presentation.js',
    publicPath: '/dist/',
    library: "augmented-next-presentation",
    globalObject: 'this',
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
  stats: "errors-only",
  devtool: "source-map",
  externals: {
    'augmentedjs-next': {
      commonjs: 'augmentedjs-next',
      commonjs2: 'augmentedjs-next',
      amd: 'augmentedjs-next',
      root: 'augmentedjs-next'
    },
    'presentation-application': {
      commonjs: 'presentation-application',
      commonjs2: 'presentation-application',
      amd: 'presentation-application',
      root: 'presentation-application'
    },
    'presentation-components': {
      commonjs: 'presentation-components',
      commonjs2: 'presentation-components',
      amd: 'presentation-components',
      root: 'presentation-components'
    },
    'presentation-controller': {
      commonjs: 'presentation-controller',
      commonjs2: 'presentation-controller',
      amd: 'presentation-controller',
      root: 'presentation-controller'
    },
    'presentation-decorator': {
      commonjs: 'presentation-decorator',
      commonjs2: 'presentation-decorator',
      amd: 'presentation-decorator',
      root: 'presentation-decorator'
    },
    'presentation-dom': {
      commonjs: 'presentation-dom',
      commonjs2: 'presentation-dom',
      amd: 'presentation-dom',
      root: 'presentation-dom'
    },
    'presentation-form': {
      commonjs: 'presentation-form',
      commonjs2: 'presentation-form',
      amd: 'presentation-form',
      root: 'presentation-form'
    },
    'presentation-logger': {
      commonjs: 'presentation-logger',
      commonjs2: 'presentation-logger',
      amd: 'presentation-logger',
      root: 'presentation-logger'
    },
    'presentation-mediator': {
      commonjs: 'presentation-mediator',
      commonjs2: 'presentation-mediator',
      amd: 'presentation-mediator',
      root: 'presentation-mediator'
    },
    'presentation-models': {
      commonjs: 'presentation-models',
      commonjs2: 'presentation-models',
      amd: 'presentation-models',
      root: 'presentation-models'
    },
    'presentation-request': {
      commonjs: 'presentation-request',
      commonjs2: 'presentation-request',
      amd: 'presentation-request',
      root: 'presentation-request'
    },
    'presentation-router': {
      commonjs: 'presentation-router',
      commonjs2: 'presentation-router',
      amd: 'presentation-router',
      root: 'presentation-router'
    },
    'presentation-storage': {
      commonjs: 'presentation-storage',
      commonjs2: 'presentation-storage',
      amd: 'presentation-storage',
      root: 'presentation-storage'
    },
    'presentation-table': {
      commonjs: 'presentation-table',
      commonjs2: 'presentation-table',
      amd: 'presentation-table',
      root: 'presentation-table'
    },
    'presentation-table': {
      commonjs: 'presentation-table',
      commonjs2: 'presentation-table',
      amd: 'presentation-table',
      root: 'presentation-table'
    },
    'presentation-view': {
      commonjs: 'presentation-view',
      commonjs2: 'presentation-view',
      amd: 'presentation-view',
      root: 'presentation-view'
    },
    'presentation-widget': {
      commonjs: 'presentation-widget',
      commonjs2: 'presentation-widget',
      amd: 'presentation-widget',
      root: 'presentation-widget'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(require("./package.json").version)
    })
  ]
};
