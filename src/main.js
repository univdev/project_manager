// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/index.less';
import RandomColor from '@/plugins/RandomColor';
import Pagination from '@/plugins/Pagination';

import App from './App';
import { store, router } from './router';

Vue.use(ElementUI);
Vue.use(RandomColor);
Vue.use(Pagination);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
