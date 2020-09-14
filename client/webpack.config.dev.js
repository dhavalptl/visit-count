const path = require('path');
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    devServer: {
        contentBase: path.join(__dirname, '/dist'),
        compress: true,
        port: 4000,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "/src/index.html")
        }),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development'
        })
    ]
});