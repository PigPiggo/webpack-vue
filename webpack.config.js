const path = require ('path'); 
const VueLoaderPlugin = require('vue-loader/lib/plugin'); 
const HTMLWebpackPlugin  = require ('html-webpack-plugin'); 
const webpack = require ('webpack')

const isDev = process.env.NODE_ENV === 'development';

const config = {
  entry: path.join (__dirname, './src/main.js'), 
  output: {
    filename: 'bundle.js', 
    path: path.join (__dirname, 'dist')
  }, 
  module: {
    rules: [
      {
        test: /.vue$/, 
        loader: 'vue-loader', 
      }, 
      {
        test: /.css$/, 
        use: [
          'vue-style-loader', 
          'css-loader'
        ]
      }
    ]
  }, 
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new VueLoaderPlugin (), 
    new HTMLWebpackPlugin (), 
  ]
}

if (isDev)
  config.devServer = {
    port: 8080, 
    host: 'localhost', 
    overlay: {
      errors: true, 
    }, 
    open: true
  }
module.exports = config; 