var path = require('path');
 var webpack = require('webpack');

 module.exports = {
    watch: true,
     entry: './app_main.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'main.bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015']
                 }
             },
             {
                test:/\.(s*)css$/,
                loader:['style-loader','css-loader', 'sass-loader']
            }
         ]
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };
