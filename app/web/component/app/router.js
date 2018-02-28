import Vue from 'vue';

import VueRouter from 'vue-router';

import ListView from './list';

import Account from './account';

import Table from './table';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: '/app',
  routes: [
    {
      path: '/',
      component: ListView
    },
    {
      path: '/list',
      component: ListView
    },
    {
      path: '/account',
      component: Account
    },
    {
      path: '/table',
      component: Table
    },
    {
      path: '/detail/:id',
      component: () => import('./detail')
    }
  ]
});

export default router;
