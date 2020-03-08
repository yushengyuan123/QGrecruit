import Vue from 'vue';
import VueRouter from 'vue-router';
// @ts-ignore
import indexPage from '@/views/indexPage/indexPage';

Vue.use(VueRouter);

// @ts-ignore
const routes: any = [
  {
    path: '/',
    redirect: '/indexPage'
  },

  {
    path: '/indexPage',
    name: 'indexPage',
    component: indexPage,
    children: [

    ]
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
