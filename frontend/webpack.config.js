const path = require("path");
const dotenv = require('dotenv');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { createProxyMiddleware } = require('http-proxy-middleware');
// Load environment variables from .env file
const env = dotenv.config().parsed;
// Set up the environment variable for Webpack
const envKeys = {
    'process.env.REACT_APP_DATABASE_URL': JSON.stringify(env.REACT_APP_DATABASE_URL),
  };


module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: { path: path.join(__dirname, "build"), filename: "index.bundle.js" },
    mode: process.env.NODE_ENV || "development",
    resolve: { modules: [path.resolve(__dirname, "src"), "node_modules"] },
    devServer: { 
         static: path.join(__dirname, "src"),
         proxy: {
            '/api': {
              target: 'http://localhost:8080',
              changeOrigin: true,
            },
          },
 },


    module: {
        rules: [
            { 
                test: /\.(js|jsx)$/, 
                exclude: /node_modules/, 
                use: ["babel-loader"] 
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader"],
            },
            { 
                test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
                use: ["file-loader"] 
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
        // Add DefinePlugin to replace environment variables in the code
        new webpack.DefinePlugin(envKeys),
    ],
};