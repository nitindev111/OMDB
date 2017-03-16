
var webpack = require('webpack');
var path = require('path');
//var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.join(__dirname, "src"),
  entry: "./index.js",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      },
      {test: /\.(jpe?g|png|gif|svg)$/i,
     loader: "file-loader?name=/images/[name].[ext]"},
      {
          test: /\.css$/,
          exclude: /(node_modules)/,    
          loaders: ['style-loader', 'css-loader'],
        },
    ]
  },
  output: {
    path: __dirname + "/dist",
    filename: "client.min.js"
  },
//   plugins: [
//     //new webpack.optimize.OccurenceOrderPlugin(),
//    // new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
//   ],
};
