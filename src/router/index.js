import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ToDoCard from '../components/ToDoCard.vue'
import NewToDo from '../components/NewToDo.vue'
import ToDoList from '../components/ToDoList'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ToDoCard',
    name: 'ToDoCard',
    component: ToDoCard
  },
  {
    path: '/ToDoList',
    name: 'ToDoList',
    component: ToDoList
  },
  {
    path: '/NewToDo ',
    name: 'NewToDo ',
    component: NewToDo 
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
