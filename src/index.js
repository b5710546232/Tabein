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
import Test from './components/Test.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter);
const router = new VueRouter();
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
  '/vehicle':{
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

});
// redirect to home if any routes are unmatched
router.redirect({
  // '*':'/home'
  '*':'/test'
});

// start the app
router.start(App,'#app');
