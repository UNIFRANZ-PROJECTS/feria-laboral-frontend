import Vue from "vue";

import Router from "vue-router";
import Home from "./../views/home.vue"
import Profile from "./../views/client/students/profile.vue"
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
    },
  ],
});
