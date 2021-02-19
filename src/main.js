import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

const root = document.createElement ('div'); 
root.id = 'app'
document.body.appendChild (root)

new Vue({
  el: root,
  render: h => h(App)
});