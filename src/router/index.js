import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Agent',
      component: resolve => require(['@/views/home/index.vue'], resolve)
    },
    {
      path: '/myCruise',
      name: 'MY Cruise',
      component: resolve => require(['@/views/my-cruise/index.vue'], resolve),
      children: [
      ]
    },
    {
      path: '/help',
      name: 'HELP',
      component: resolve => require(['@/views/help/index.vue'], resolve),
      children: [
      ]
    }
  ]
});