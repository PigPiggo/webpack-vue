import CSSConfig from './CSSConfig'; 
import FileConfig from './FileConfig'

export function getModuleConfig () {
  return {
    rules: [
      {
        test: /.vue$/, 
        loader: 'vue-loader', 
      }, 
      ...new CSSConfig (), 
      ...new FileConfig (), 
    ]
  }
}