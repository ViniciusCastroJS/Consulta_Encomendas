const webpack = require("webpack");

module.exports = {
   mode: 'production',
   entry: './index.js',
   output: {
      filename: 'index.js',
      path: __dirname + '/build'
   },
   
   module: {
     rules: [{
       test: /\.css$/,
       use: [
         'style-loader',
         'css-loader'
       ]
     }]
   },
}