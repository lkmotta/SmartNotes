const path = require('path');

module.exports = {
  entry: './src/index.jsx', // arquivo de entrada
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'bundle.js',
  },
  mode: 'development', // modo
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};