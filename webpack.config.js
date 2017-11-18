var path = require('path');
var webpack = require('webpack');

var config = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, 'app/js/main.jsx')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [

      // JSX
      {
        test: [/\.(js|jsx)$/],
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'app/js/') //include jsx src path for react-hot-loader
      },

      // CSS
      // {
      //   test: /\.css$/, // Only .css files
      //   loader: 'style!css', // Run both loaders
      //   include: path.join(__dirname, 'app/css/')
      // },

      // SASS
      {
        test: /\.scss$/,
        loader: 'style!css!sass',
        include: path.join(__dirname, 'app/sass/')
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin() //if any error exists ,the demo will not autorefresh
  ]
};

module.exports = config;
