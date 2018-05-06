const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const absolute = src => path.resolve(__dirname, src);

module.exports = {
  entry: [
    'babel-polyfill', absolute('src/index.js')
  ],
  output: {
    path: absolute('dist'),
    filename: 'bundle.js',
    publicPath: ''
  },
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }
          }, {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [autoprefixer({
                  browsers: ['> 1%', 'last 2 versions']
                })]
            }
          }, {
            loader: 'sass-loader'
          }
        ]
      }, {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[name]__[local]__[hash:base64:5]'
            }
          }, {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [autoprefixer({
                  browsers: ['> 1%', 'last 2 versions']
                })]
            }
          }
        ]
      }, {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader?limit=8000&name=images/[name].[ext]'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: absolute('public/index.html'), inject: 'body', filename: 'index.html'}),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('develop')
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
