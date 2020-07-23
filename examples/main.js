import Vue from 'vue';
import App from './App.vue';
import router from './router/router.js';

import Header from './components/header/HeadCommon.vue';
Vue.component('app-header', Header);


//1. 引入组件（注册所有）
import DonvvUi from '../lib/donvvui';
import '../lib/donvvui.css';
Vue.use(DonvvUi);

//2. 按需加载
// 引入组件
// import Button from '../lib/packages/button';
// import '../lib/packages/button/style.css';
// Vue.use(Button)

// // 引入modal
// import Toast from '../lib/packages/toast';
// import '../lib/packages/toast/style.css';
// Vue.prototype.$toast = Toast;

// 使用babel-plugin-component
// import { Button, Toast, Dialog } from '../lib/donvvui';
// Vue.use(Button);
// Vue.prototype.$toast = Toast;
// Vue.prototype.$dialog = Dialog;

 
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');