// Import the 'path' module for handling file paths
const path = require("path");

// Import the 'HtmlWebpackPlugin' for generating HTML files
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Configuration object for webpack
module.exports = {
  // Entry point for the application
  entry: path.join(__dirname, "src", "index.js"),

  // Output configuration
  output: {
    path: path.join(__dirname, "public"), // Output directory for bundled files

    filename: "index.bundle.js", // Name of the bundled JavaScript file
  },

  // Set the development mode by default, unless specified otherwise in NODE_ENV
  mode: process.env.NODE_ENV || "development",

  // Configuration for resolving module paths
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"], // Specify module search paths
  },

  // Development server configuration
  devServer: {
    static: path.join(__dirname, "src"), // Serve files from this directory

    proxy: {
      "/api": {
        // Proxy requests with '/api' to the target
        target: "http://localhost:8080", // Target URL for proxying
        // target: "https://alma-cap-bookmyshow-backend-6yxn.onrender.com", // Target URL for proxying on render.com deployment

        changeOrigin: true, // Change the origin of the request
      },
    },
  },

  // Loaders configuration for handling different file types
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Apply loader to JavaScript and JSX files

        exclude: /node_modules/, // Exclude 'node_modules' directory

        use: ["babel-loader"], // Use 'babel-loader' for transpilation
      },
      {
        test: /\.(css|scss)$/, // Apply loader to CSS and SCSS files

        use: ["style-loader", "css-loader"], // Use 'style-loader' and 'css-loader'
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/, // Apply loader to image and media files

        use: ["file-loader"], // Use 'file-loader' for handling files
      },
    ],
  },

  // Plugins configuration
  plugins: [
    // Generate an HTML file and inject the bundled JavaScript
    new HtmlWebpackPlugin({
      // Use 'index.html' as template
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};
