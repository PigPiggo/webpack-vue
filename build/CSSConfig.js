import MiniCssExtractPlugin from 'mini-css-extract-plugin'; 
import path from 'path'

export default class CSSConfig {

  constructor (sourceMap = undefined) {
    this.isDev = process.env.NODE_ENV === 'development'; 
    this.sourceMap = this.getSourceMap (sourceMap);
    const moduleRegs = [
      /module/, /\?vue/, /\.module\.\w+$/
    ]
    return [
      this.getNormalCSSConfig (), 
      this.getScssConfig ()
    ]
  }; 

  getSourceMap (sourceMap = undefined) {
    if (sourceMap === undefined) return this.isDev; 
    return sourceMap; 
  }

  getNormalCSSConfig () {
    let cssLoderConfig = {
      loader: 'css-loader',
      options: {
        importLoaders: 2
      } 
    }
    if (this.sourceMap) 
      cssLoderConfig.options.sourceMap = this.sourceMap; 
    let use = [cssLoderConfig, 'postcss-loader']
    if (this.isDev) {
      use.unshift ('style-loader') 
    } else {
      let cssExtractLoaderConfig = {
        loader: MiniCssExtractPlugin.loader, 
        options: {
          publicPath: (resourcePath, context) => {
            // publicPath 是资源相对于上下文的相对路径
            // 例如：对于 ./css/admin/main.css publicPath 将会是 ../../
            // 而对于 ./css/main.css publicPath 将会是 ../
            /* console.log(resourcePath);
            console.log(context);
            process.exit () */
            return path.relative(path.dirname(resourcePath), context) + '/';
          },
        }
      }
      use.unshift (cssExtractLoaderConfig)
    }
    return {
      use, 
      test: /\.css$/, 
    }
  }; 

  getScssConfig (options) {
    let sassLoaderConfig = {
      loader: 'sass-loader', 
    }; 
    if (options) sassLoaderConfig.options = sassLoaderConfig
    // if (this.sourceMap) sassLoaderConfig.options.sourceMap = this.sourceMap; 
    let config = this.getNormalCSSConfig (); 
    config.test = /\.s[ac]ss$/i
    config.use.push (sassLoaderConfig)
    return config; 
  }
}