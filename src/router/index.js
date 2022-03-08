import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    component: () => import('@/layout')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
