import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import { sync } from 'vuex-router-sync';

import MainLayout from '@/layouts/main';

Vue.use(Vuex);
Vue.use(Router);

const store = new Vuex.Store({
  state: {
    me: null,
  },
  mutations: {

  },
});

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainLayout,
      name: 'main',
    },
  ],
});

sync(store, router);

export { store, router };
