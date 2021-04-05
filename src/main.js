import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import * as services from "./services/";
import './mixins'
import GlobalComponents from './plugins/globalComponents'
import style from './assets/css/style.css'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

Vue.config.productionTip = false

Vue.prototype.$services = services;

Vue.use(GlobalComponents)

Vue.use(
  Toast,{closeOnClick:true}
),

Vue.component("modal", {
  template: "#modal-template"
});

new Vue({
  router,
  style,
  Toast,
  render: h => h(App)
}).$mount('#app')
