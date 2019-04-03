import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Results from './views/Results.vue';
import User from './views/User.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/results=:search',
      name: 'results',
      component: Results,
    },
    {
      path: '/user/:login',
      name: 'user',
      component: User,
    },
  ],
});
