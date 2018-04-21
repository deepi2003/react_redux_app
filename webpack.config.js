var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: path.resolve('src'),
    entry: {
        index: './index.js'
    },
    devtool: 'cheap-module-eval-source-map',
    mode: 'development',
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    devServer:{
        contentBase: 'public',
        port: 3000
    },
    module: {
        rules: [
            {
                test: [/\.js$/, /\.es6$/],
                exclude: /node_modules/,
                loader: "babel-loader"
            }

        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.es6']
    },

}