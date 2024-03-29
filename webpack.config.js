const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './index.html',
    filename: './index.html',
    inject: 'body'
});

module.exports = {
    entry: {
        app: './index.js'
    },
    output: {
        path: path.resolve('dist'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }

        ]
    },
    plugins: [
        HtmlWebpackPluginConfig
    ],
    devtool: 'source-map'
};
