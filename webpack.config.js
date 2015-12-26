var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './app/index.js'
  ],
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js",
    publicPath: "/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Falk.io',
      template: 'public/index.html', // Load a custom template
      inject: 'body' // Inject all scripts into the body
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module: {
    loaders: [
      {
        //tell webpack to use jsx-loader for all *.jsx files
        test: /\.js$/,
        loader: 'babel',
        include: path.join(__dirname, 'app')
      }
    ]
  }
};
