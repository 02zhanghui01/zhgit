import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home.vue"
import Login from "../components/Login.vue"
import User from "../components/User.vue"
import Search from "../components/Search.vue"
import Dingdan from "../components/Dingdan.vue"

Vue.use(Router);

const routes = [
  {
    path: '/home',
    name: 'homeome',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component:Login
  },
  {
    path:'/user',
    name:'user',
    component:User
  },
  {
    path:'/search',
    name:'search',
    component:Search
  },
  {
    path:'/dingdan',
    name:'dingdan',
    component:Dingdan
  },
]
export default new Router({
  routes
})
