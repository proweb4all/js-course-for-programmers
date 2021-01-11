const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
    // print: './src/print.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    overlay: true,
    proxy: {
      '/js-frontend-api/**': {
        target: 'http://faceprog.ru/',
        secure: false,
        changeOrigin: true
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      // title: 'Development',
      template: 'index.html'
    })
  ],
  output: {
    // filename: '[name].bundle.js',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
          }
        }
      }
    ]
  }
}
