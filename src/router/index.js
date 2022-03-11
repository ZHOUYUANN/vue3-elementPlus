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
        path: '/user/manage',
        name: 'manage',
        component: () => import('@/views/user-manage'),
        meta: {
          title: '用户管理',
          icon: 'el-icon-user'
        }
      },
      {
        path: '/user/role',
        name: 'role',
        component: () => import('@/views/user-role'),
        meta: {
          title: '用户角色',
          icon: 'el-icon-user'
        }
      },
      {
        path: '/user/permission',
        name: 'permission',
        component: () => import('@/views/user-permission'),
        meta: {
          title: '用户权限',
          icon: 'el-icon-user'
        }
      },
      {
        path: '/user/info/:id',
        name: 'info',
        component: () => import('@/views/user-info'),
        meta: {
          title: '用户详情'
        }
      },
      {
        path: '/user/import',
        name: 'import',
        component: () => import('@/views/import'),
        meta: {
          title: 'execlimport'
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
      title: '文章',
      icon: 'persennel'
    },
    children: [
      {
        path: '/article/ranking',
        name: 'ranking',
        component: () => import('@/views/article-ranking'),
        meta: {
          title: '文章排行',
          icon: 'persennel'
        }
      },
      {
        path: '/article/:id',
        name: 'detail',
        component: () => import('@/views/article-detail'),
        meta: {
          title: '文章详情',
          icon: 'persennel'
        }
      },
      {
        path: '/article/create',
        name: 'create',
        component: () => import('@/views/article-create'),
        meta: {
          title: '创建文章'
        }
      },
      {
        path: '/article/editor/:id',
        name: 'editor',
        component: () => import('@/views/article-editor'),
        meta: {
          title: '文章编辑',
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
          title: '个人中心',
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
