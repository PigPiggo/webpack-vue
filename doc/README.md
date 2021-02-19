# 项目简介
## 初衷
由于vue-cli的高度封装，使得vue项目优化及webpack客制化配置变得困难，所以新建这个项目，手动配置一套vue+webpack+elementUI的项目
## 技术栈
### dependencies
- "vue": "^2.6.12"
- "element-ui": "^2.15.0"
### devDependencies
*webpack相关*
- "webpack": "^5.22.0",
- "webpack-cli": "^4.5.0",
- "webpack-dev-server": "^3.11.2"

*vue编译相关*
- "vue-loader": "^15.9.6",
- "vue-loader-plugin": "^1.3.0",
- "vue-template-compiler": "^2.6.12",

*样式及预编译器*
- "vue-style-loader": "^4.1.2",
- "style-loader": "^2.0.0",
- "css-loader": "^5.0.2",
- "sass": "^1.32.7",
- "sass-loader": "^11.0.1",
- "postcss": "^8.2.6",
- "postcss-loader": "^5.0.0",
- "autoprefixer": "^10.2.4",

*静态资源处理*
- "file-loader": "^6.2.0",
- "url-loader": "^4.1.1",

*js处理*
- "@babel/core": "^7.12.17",
- "@babel/preset-env": "^7.12.17",
- "babel-loader": "^8.2.2",

*编译优化*
- "html-webpack-plugin": "^5.1.0",
- "clean-webpack-plugin": "^3.0.0",
- "mini-css-extract-plugin": "^1.3.7",

*编译过程美化*
- "chalk": "^4.1.0",
- "progress-bar-webpack-plugin": "^2.1.0",