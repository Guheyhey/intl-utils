const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const uglifyOptions = {
  output: {
    wrap_iife: true,
  },
}

module.exports = {
  entry: './test/index.js',
  output: {
    filename: 'test-bundle.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd'
  },
  plugins: [
    new UglifyJSPlugin({
      uglifyOptions,
    }),
  ],
};