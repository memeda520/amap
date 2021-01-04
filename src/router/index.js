import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/home',
    redirect: '/index',
    component: () => import(/* webpackChunkName: "home" */ '../components/Home.vue') ,
    meta: { title: '自述文件' },
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () => import(/* webpackChunkName: "index" */ '../views/Indexs/Index.vue'),
        meta:{
          title:"首页"
        }
      },
      {
        path: '/test',
        name: 'test',
        component: () => import(/* webpackChunkName: "index" */ '../views/Tests/Test.vue'),
        meta:{
          title:"首页"
        }
      },
      {
        path: '/test1',
        name: 'test1',
        component: () => import(/* webpackChunkName: "index" */ '../views/Tests/test2.vue'),
        meta:{
          title:"首页"
        }
      },
      {
        path: '/test3',
        name: 'test3',
        component: () => import(/* webpackChunkName: "index" */ '../views/Tests/test3.vue'),
        meta:{
          title:"首页"
        }
      }
    ]
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "home" */ '../components/Login.vue') ,
    meta: { title: '登录' },
 
  },
  {
        path: '*',
        redirect: '/404'
    }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
