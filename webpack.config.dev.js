// import webpack from 'webpack';
import path from 'path';

export default {
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/index.jsx'),
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, loaders: ['babel-loader'] },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
    ],
  },
};
