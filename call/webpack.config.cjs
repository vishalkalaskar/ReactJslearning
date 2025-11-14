const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  entry: './src/main.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    //filename: 'main.js',
  filename: '[name].js',
    // Use your actual GitHub CodeSpaces URL
	//publicPath: 'http://localhost:3001/', mention IP also
    publicPath: 'https://redesigned-journey-4r44pvqwrg4h7g7g-3009.app.github.dev/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js','.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/i,
        type: 'asset/resource',
        // or use: '@svgr/webpack' if you want SVG as React components
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'call',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.tsx',
      },
      shared: {
        react: { singleton: true, eager: true,requiredVersion: '^19.2.0'},
        'react-dom': { singleton: true, eager: true,requiredVersion: '^19.2.0'},
      },
    }),
    new HtmlWebpackPlugin({
        //template: '/index.html',
       template: './public/index.html',
    }),
  ],
  devServer: {
    port: 3009,
    host: '0.0.0.0', // Allows external access
    hot: true,
    open: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
};