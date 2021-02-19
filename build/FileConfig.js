export default class FileConfig {
  constructor () {
    this.fileType = {
      img: /\.(jpg|jpeg|png|gif|)(\?.*)?$/, 
      font: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, 
      media: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, 
    }; 
    return this.getFileConfig (); 
  }; 

  getFileConfig () {
    let fileLoaderConfigArr = []; 
    for (let k in this.fileType) {
      fileLoaderConfigArr.push ({
        loader: 'url-loader', 
        test: this.fileType[k], 
        options: {
          limit: 1024, 
          fallback: {
            loader: 'file-loader', 
            options: {
              name: '[name].[contenthash].[ext]', 
              outputPath: `${k}/`,
              esModule: false
            }
          }
        }
      })
    }
    return fileLoaderConfigArr; 
  }


}