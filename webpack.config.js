var autoprefixer = require('autoprefixer')
var path = require('path')
var webpack = require('webpack')
var WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var publicPath = 'http://localhost:4001/'

var env = process.env.MIX_ENV || 'dev'
var prod = env === 'prod'

var entry = './web/static/js/index.js'
var hot = 'webpack-hot-middleware/client?path=' +
  publicPath + '__webpack_hmr'

var defaultPlugins = [
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    __PROD: prod,
    __DEV: env === 'dev'
  })
]

var plugins = []
var loaders = []

if (env === 'dev') {
  plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new WatchMissingNodeModulesPlugin('node_modules')
  ]
  loaders = [{
    test: /\.(js|jsx)$/,
    loader: 'babel',
    exclude: path.resolve(__dirname, 'node_modules'),
    query: {
      cacheDirectory: true
    }
  },
  {
    test: /\.css$/,
    loader: 'style!css?importLoaders=1!postcss'
  }]
}

if (env === 'prod') {
  plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true, // React doesn't support IE8
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    }),
    new ExtractTextPlugin('static/css/[name].[contenthash:8].css')
  ]

  loaders = [{
    test: /\.(js|jsx)$/,
    exclude: path.resolve(__dirname, 'node_modules'),
    loader: 'babel'
  },
  {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract('style', 'css?importLoaders=1!postcss')
  }
  ]
}

module.exports = {
  devtool: prod ? null : 'cheap-module-eval-source-map',
  entry: prod ? entry : [hot, entry],
  output: {
    path: path.resolve(__dirname) + '/priv/static/js',
    filename: 'index.bundle.js',
    publicPath: publicPath
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', ''],
    modules: [ 'node_modules', path.join(__dirname, 'web/static/js') ]
  },
  plugins: defaultPlugins.concat(plugins),
  module: {
    loaders: loaders
  },
  // We use PostCSS for autoprefixing only.
  postcss: function() {
    return [
      autoprefixer({
        browsers: [
          '>1%',
          'last 4 versions',
          'Firefox ESR',
          'not ie < 9', // React doesn't support IE8 anyway
        ]
      }),
    ];
  }
}