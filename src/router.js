import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const announceNewPageToScreenReaders = (to) => {
  const announcer = document.getElementById('announcer');
  if (!to.name) { return }
  announcer.innerHTML = `${to.name} has loaded`;
};

export default new Router({
  mode: 'history', // default uten history er hash mode <- Bruker URL hash til å simulere en
  // fullstendig URL, for å unngå reload ved URL-endringer NB! Krever korrekt server-oppsett mtp SPA!
  afterEach: announceNewPageToScreenReaders,
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
