const merge = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const common = require('./webpack.common.js');

module.exports = merge.smart(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[hash].css",
            chunkFilename: "[id].[hash].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    }
});