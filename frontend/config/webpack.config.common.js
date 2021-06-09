const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, '../src/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|woff|woff2|ttf|svg|ico)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin({cleanStaleWebpackAssets: false,}),
    new HtmlWebpackPlugin({template: './public/index.html', filename: 'index.html'})
  ]
}