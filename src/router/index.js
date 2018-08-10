import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import { sync } from 'vuex-router-sync';

import MainLayout from '@/layouts/main';

import Error404Page from '@/pages/errors/404';
import MainPage from '@/pages/main';


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
      children: [
        { path: '/', component: MainPage, name: 'main' },
        { path: '*', component: Error404Page },
      ],
    },
  ],
});

sync(store, router);

export { store, router };
