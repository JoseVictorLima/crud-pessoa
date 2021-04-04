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

Vue.config.productionTip = false

Vue.prototype.$services = services;

Vue.use(GlobalComponents)

Vue.component("modal", {
  template: "#modal-template"
});

new Vue({
  router,
  style,
  render: h => h(App)
}).$mount('#app')
