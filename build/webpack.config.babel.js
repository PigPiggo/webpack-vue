const path = require ('path'); 
import { getModuleConfig } from './index'; 
import PluginCoinig from './PluginCoinig' ; 
import devServer from './DevServerConfig'

export default {

  target: 'web', 

  mode: process.env.NODE_ENV, 

  entry: path.resolve (__dirname, '../src/main.js'), 

  output: {
    filename: 'js/[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: process.env.NODE_ENV === 'development' ? '/' : './'
  }, 

  devServer, 

  module: getModuleConfig (), 
  plugins: new PluginCoinig (), 
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}