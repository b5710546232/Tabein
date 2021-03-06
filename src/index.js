import Vue from 'vue'
import App from './components/App.vue'
import Home from './components/Home.vue'
import Search from './components/Search.vue'
import AboutUs from './components/About.vue'
import Login from './components/Login.vue'
import Vehicle from './components/Vehicle.vue'
import Register from './components/Register.vue'
import DashBoard from './components/Dashboard.vue'
import Accountsetting from './components/Accountsetting.vue'
import AddModel from './components/AddModel.vue'
// import AddVehicle from './components/AddVehicle.vue'
import Test from './components/Test.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Success from './components/Success.vue'

import EditVehicle from './components/EditVehicle.vue'
import Temp from './components/temp.vue'


Vue.use(VueRouter);
Vue.use(VueResource);
export const router = new VueRouter();
router.map({
  '/home':{
    component:Home
  },
  '/search':{
    component:Search
  },
  '/about_us':{
    component:AboutUs
  },
  '/login':{
    component:Login
  },
  '/register':{
    component:Register
  },
  '/vehicle/:id':{
    name:"vehicle",
    component:Vehicle
  },
  '/dashboard':{
    component:DashBoard
  },
  '/accountsetting':{
    component:Accountsetting
  },
  '/test':{
    component:Test
  },
  '/addModel':{
    component:AddModel
  },
  // '/addVehicle':{
  //   component:AddVehicle
  // },
  '/temp':{
    component:Temp
  },
  '/editVehicle':{
    component:EditVehicle
  },
  '/success':{
    component:Success
  }
});
// redirect to home if any routes are unmatched
router.redirect({
  '*':'/success'
  // '*':'/home'
  // '*':'/dashboard'
  // '*': '/addModel'
  // '*' : '/addVehicle'
});

// start the app
router.start(App,'#app');
