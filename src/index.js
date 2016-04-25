import Vue from 'vue'
import App from './components/App.vue'
import Home from './components/Home.vue'
import Search from './components/Search.vue'
import AboutUs from './components/About.vue'
import Login from './components/Login.vue'
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

});
// redirect to home if any routes are unmatched
router.redirect({
  '*':'/home'
});

// start the app
router.start(App,'#app');
