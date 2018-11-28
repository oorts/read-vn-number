var path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

 module.exports = {
    entry: {
        'index': './src/index.js',
        'index.min': './src/index.js',
    },
    output: {
         path: path.resolve(__dirname, 'dist'),
         filename: '[name].js'
    },
    optimization: {
        concatenateModules: true,
        minimize: true,
        minimizer: [new UglifyJsPlugin({include: /\.min\.js$/})]
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }],
     },
     stats: {
         colors: true
     },
     devtool: 'source-map'
 };