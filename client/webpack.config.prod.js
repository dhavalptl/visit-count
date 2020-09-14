const path = require('path');
const webpack = require('webpack');
const {merge} = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        filename: '[name].[contenthash:8].js',
        chunkFilename: '[name].[contenthash:8].chunk.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "/src/index.html")
        }),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'production'
        })
    ]
});