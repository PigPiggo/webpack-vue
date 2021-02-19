import Vue from 'vue';
import { Button, Select } from 'element-ui';
import App from './App.vue';

Vue.use(Button);

const root = document.createElement ('div'); 
root.id = 'app'
document.body.appendChild (root)

new Vue({
  el: root,
  render: h => h(App)
});