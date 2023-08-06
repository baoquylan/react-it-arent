const commonConfig = require("./webpack.common");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const  webpack  = require("webpack");



const devConfig = {
    mode: "development",
    target: "web",
    devtool: "inline-source-map",
    output: {
        publicPath: "/",
        filename: 'bundle.[hash].js'
    },
    devServer: {
        port: 3002,
        historyApiFallback: true,
        open: true,
        hot: true,
        host: "localhost",
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.API_URL': JSON.stringify("http://localhost:8002"),
            'process.env.NODE': JSON.stringify(true)
          }),
        new HtmlWebpackPlugin({
            template: "public/index.html",
        }),
    ],
};

module.exports = merge(commonConfig, devConfig);
