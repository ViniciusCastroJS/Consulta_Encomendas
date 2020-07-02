const webpack = require("webpack")
const MiniCSSExtract = require('mini-css-extract-plugin');
const UglifyJS = require('uglifyjs-webpack-plugin');
const Minimize = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   mode: 'production',
   entry: './index.html',
   output: {
      filename: 'index.html',
      path: __dirname + '/build'
   },

   optimization: {
    minimizer: [
       new UglifyJS({
        cache: true,
        parallel: true
       }),
       new Minimize({})
     ]
   },


   plugins: [
     new MiniCSSExtract({
       filename: 'style.css'
     }),
   ],
   
   module: {
     rules: [
      {
        test: /\.png$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
            },
          },
        ],
      }, 

      {
        test: /\.html$/i,
        use: [{loader: 'html-loader'}],
      },

      {
       test: /\.scss$/i,
       use: [
        MiniCSSExtract.loader,
        'css-loader',
        'sass-loader',
      ]
     }]
   },
}