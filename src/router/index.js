import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
   {
    path: '/',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta:{
      navOptions: true,
      navSearch: true
    }
  },
  {
    path: '/addtask',
    name: 'AddTask',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "addtask" */ '../views/AddTask.vue'),
    meta:{
      navSaveMore: true,
      navSave: true,
      navOptions: true
    }
  },
  {
    path: '/alltasks',
    name: 'AllTasks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "alltasks" */ '../views/AllTasks.vue'),
    meta:{
      navOptions: true,
      navSearch: true
    }
  },
  {
    path: '/donetasks',
    name: 'DoneTasks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "donetasks" */ '../views/DoneTasks.vue'),
    meta:{
      navOptions: true,
      navSearch: true
    }
  },
  {
    path: '/addlist',
    name: 'AddList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "addlist" */ '../views/AddList.vue')
  },
  {
    path: '/addnotebook',
    name: 'AddNotebook',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "addnotebook" */ '../views/AddNotebook.vue')
  },
  {
    path: '/editlist',
    name: 'EditList',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "editlist" */ '../views/EditList.vue')
  },
  {
    path: '/task/:id',
    name: 'Task',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "task" */ '../views/Task.vue'),
    meta:{
      navDelete: true,
      navMove: true,
      navSave: true
    }
  },
  {
    path: '/searchtask',
    name: 'SearchTask',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "searchtask" */ '../views/SearchTask.vue'),
    meta:{
      navMic: true
    }
  },
  {
    path: '/editlists',
    name: 'EditLists',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "editlists" */ '../views/EditLists.vue')
  },
  {
    path: '/notebooks',
    name: 'Notebooks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "notebooks" */ '../views/Notebooks.vue')
  },
  {
    path: '/config',
    name: 'Config',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "config" */ '../views/Config.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
