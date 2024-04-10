import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    component: () => import ('@/layout/index.vue'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive:false
    },
    children: [
        {
          path: '/home',
          name: 'Home',
          component: () => import('@/views/home/index.vue')
        }
    ]
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router
