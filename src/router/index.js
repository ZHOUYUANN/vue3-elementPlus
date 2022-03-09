import { createRouter, createWebHashHistory } from 'vue-router'
import BaseLayout from '@/layout'

// 私有的路由表（有权限的）
const privateRoutes = [
  {
    path: '/user',
    name: 'user',
    redirect: '/user/manage',
    component: BaseLayout,
    meta: {
      title: '用户',
      icon: 'persennel'
    },
    children: [
      {
        path: 'manage',
        name: 'manage',
        component: () => import('@/views/user-manage'),
        meta: {
          title: 'manage',
          icon: 'el-icon-user'
        }
      },
      {
        path: 'role',
        name: 'role',
        component: () => import('@/views/user-role'),
        meta: {
          title: 'role',
          icon: 'el-icon-user'
        }
      },
      {
        path: 'permission',
        name: 'permission',
        component: () => import('@/views/user-permission'),
        meta: {
          title: 'permission',
          icon: 'el-icon-user'
        }
      },
      {
        path: 'info/:id',
        name: 'info',
        component: () => import('@/views/user-info'),
        meta: {
          title: 'info',
          icon: 'el-icon-user'
        }
      },
      {
        path: 'import',
        name: 'import',
        component: () => import('@/views/import'),
        meta: {
          title: 'execlimport',
          icon: 'el-icon-user'
        }
      }
    ]
  },
  {
    path: '/article',
    name: 'article',
    redirect: '/article/ranking',
    component: BaseLayout,
    meta: {
      title: 'article',
      icon: 'persennel'
    },
    children: [
      {
        path: 'ranking',
        name: 'ranking',
        component: () => import('@/views/article-ranking'),
        meta: {
          title: 'ranking',
          icon: 'persennel'
        }
      },
      {
        path: '/:id',
        name: 'detail',
        component: () => import('@/views/article-detail'),
        meta: {
          title: 'detail',
          icon: 'persennel'
        }
      },
      {
        path: 'create',
        name: 'create',
        component: () => import('@/views/article-create'),
        meta: {
          title: 'create',
          icon: 'persennel'
        }
      },
      {
        path: 'editor/:id',
        name: 'editor',
        component: () => import('@/views/article-editor'),
        meta: {
          title: 'editor',
          icon: 'persennel'
        }
      }
    ]
  }
]

// 共有的路由表（无权限）
const publicRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    redirect: '/profile',
    component: BaseLayout,
    children: [
      // 个人中心
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/profile'),
        meta: {
          title: 'profile',
          icon: 'el-icon-user'
        }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/404')
      },
      {
        path: '/401',
        name: '401',
        component: () => import('@/views/401')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes, ...privateRoutes]
})

export default router
