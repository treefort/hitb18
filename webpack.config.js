const { join, resolve } = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: './src/app.jsx',
  },
  output: {
    path: resolve(__dirname, 'public'),
    publicPath: '/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      actions: resolve(__dirname, 'src', 'actions'),
      selectors: resolve(__dirname, 'src', 'selectors'),
      middleware: resolve(__dirname, 'src', 'middleware'),
      components: resolve(__dirname, 'src', 'components', 'containers'),
      views: resolve(__dirname, 'src', 'components', 'views'),
      css: resolve(__dirname, 'src', 'components', 'css'),
      data: resolve(__dirname, 'data')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.s?css$/,
        use: [{
            loader: "style-loader?sourceMap"
          }, {
            loader: "css-loader?sourceMap"
          }, {
            loader: "sass-loader?sourceMap"
        }]
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              context: resolve(__dirname, "public"),
              publicPath: resolve(__dirname, "public"),
              name: '[name].[ext]'
            }  
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              context: resolve(__dirname, "public"),
              publicPath: resolve(__dirname, "public"),
              name: '[name].[ext]'
            }  
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: resolve(__dirname, 'src', 'index.html'),
      filename: resolve(__dirname, 'public', 'index.html')
    })
  ],
  devServer: {
    contentBase: join(__dirname, "public"),
    publicPath: '/',
    host: '0.0.0.0',
  }
};