const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [path.join(__dirname, 'src/index.js')],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: '/node_modules',
        use: { loader: 'babel-loader' },
      },
      { test: /\.html$/, use: 'html-loader' },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],
  devServer: {
    port: 8080,
    hot: true,
  },
};
