import Vue from 'vue'
import VueRouter from 'vue-router'
import Principal from '../views/Principal.vue'
import Edit from '../views/Edit.vue'
import Filter from '../views/Filter.vue'
import Insert from '../views/Insert.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Principal',
    component: Principal
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit
  },

  {
    path: '/filter',
    name: 'Filter',
    component: Filter
  },

  {
    path: '/insert',
    name: 'Insert',
    component: Insert
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
