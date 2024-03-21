import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/current',
      name: 'current',
      component: () => import('../views/Current.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/Admin.vue')
    },
    {
      path: '/activity',
      name: 'activity',
      component: () => import('../views/Activities.vue')
    }
  ]
})

export default router
