var path = require("path");
var webpack = require("webpack");

var cfg = {
  devtool: "source-map",
  entry: [
		'webpack/hot/dev-server',
		'webpack-dev-server/client?http://localhost:8080',
    "./temp/code.js",
  ],
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "source-map-loader"
      }
    ]
  },
  devServer: {
    contentBase: 'public/',
  },
};

module.exports = cfg;