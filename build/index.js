import CSSConfig from './CSSConfig'; 
import FileConfig from './FileConfig'

export function getModuleConfig () {
  return {
    rules: [
      {
        test: /.vue$/, 
        loader: 'vue-loader', 
      }, 
      {
        test: /\.js?$/,
        loader: 'babel-loader', 
        exclude: /node_modules/
      }, 
      ...new CSSConfig (), 
      ...new FileConfig (), 
    ]
  }
}