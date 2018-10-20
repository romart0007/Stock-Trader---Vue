// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResouce from 'vue-resource';

import App from './App.vue'
import { routes } from './routes';
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResouce);

Vue.http.options.root = 'https://vue-http-49fdb.firebaseio.com/'

Vue.filter('currency', (value) => {
  return `$${value.toString()}`;
});

const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
