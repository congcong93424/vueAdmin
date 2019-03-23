import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  // 外汇单页
  { path: '/crm',name: 'crm', component: () => import('@/views/crm/crmpage'),hidden: true},
  { 
    path: '/crm/pageinfo',
    name: 'crmpageinfo', 
    component: () => import('@/views/crm/crmPageInfo'),
    hidden: true,
    meta: {
      keepAlive: true  //需要被缓存
    }
  },
  {
    path: '/',
    redirect: '/login',
    hidden: true
  },
  {
    path: '/dashboard',
    component: Layout,
    name: 'Dashboard',
    meta: { title: '服务商管理', icon: 'example' },
    children: [{
      path: 'index',
      component: () => import('@/views/dashboard/index')
    }]
  },
  {
    path: '/order',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'order',
        component: () => import('@/views/order/index'),
        meta: { title: '订单校对', icon: 'form' }
      }
    ]
  },
  
  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: '案例', icon: 'example' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
