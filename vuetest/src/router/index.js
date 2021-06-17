import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home.vue"
import Login from "../components/Login.vue"
import User from "../components/User.vue"
import Search from "../components/Search.vue"
import Register from "../components/Register.vue"
import Cart from "../components/Cart.vue"
import Dingdan from "../components/Dingdan.vue"
import Particulars from "../components/Particulars.vue"

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
    path:'/register',
    name:'register',
    component:Register
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
  {
    path:'/cart',
    name:'cart',
    component:Cart
  },
  {
    path: '/particulars/:id',
    name: 'particulars',
    component: Particulars,
    props:true
  },

]
export default new Router({
  routes
})
