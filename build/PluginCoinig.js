import HtmlWebpackPlugin from 'html-webpack-plugin'; 
import { CleanWebpackPlugin }  from 'clean-webpack-plugin'; 
import VueLoaderPlugin from 'vue-loader/lib/plugin'; 
import MiniCssExtractPlugin from 'mini-css-extract-plugin'; 

export default class PluginConfig {
  constructor () {
    let plugins = [
      this.HtmlWebpackPluginConfig (), 
      this.VueLoaderPluginConfig ()

    ]
    process.env.NODE_ENV === 'development' && plugins.push ()

    process.env.NODE_ENV === 'production' && plugins.push (
        this.MiniCssExtractPluginConfig (), 
        this.CleanWebpackPluginConfig (), 
      )
    return plugins; 
  }; 

  HtmlWebpackPluginConfig () {
    return new HtmlWebpackPlugin ({
      title: '测试'
    }); 
  }; 

  VueLoaderPluginConfig () {
    return new VueLoaderPlugin (); 
  }; 

  CleanWebpackPluginConfig () {
    return new CleanWebpackPlugin (); 
  }; 

  MiniCssExtractPluginConfig () {
    return new MiniCssExtractPlugin ({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: 'css/[id].[contenthash].css',
    }); 
  }

}