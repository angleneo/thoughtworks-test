import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/views/home/index.vue'], resolve)
    },
    {
      path: '/others',
      name: 'others',
      component: resolve => require(['@/views/others/index.vue'], resolve),
      children: [
      ]
    }
  ]
});