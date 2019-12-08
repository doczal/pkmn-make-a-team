const path = require('path');
require('dotenv').config();

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    host: process.env.DEV_HOST,
    port: process.env.DEV_PORT,
    open: true,
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
};
