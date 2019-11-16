// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from "mint-ui"
import axios from "axios";
// import $.axios from "$.axios";
import qs from 'qs';
Vue.config.productionTip = false
Vue.prototype.axios=axios;
Vue.prototype.qs = qs;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL="http://127.0.0.1:4000/";
axios.defaults.withCredentials=true
Vue.use(MintUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
