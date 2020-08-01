import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Sun from "../views/Planet/Sun.vue";
import Mercury from "../views/Planet/Mercury.vue";
import Venus from "../views/Planet/Venus.vue";
import Earth from "../views/Planet/Earth.vue";
import Mars from "../views/Planet/Mars.vue";
import Jupiter from "../views/Planet/Jupiter.vue";
import Saturn from "../views/Planet/Saturn.vue";
import Uranus from "../views/Planet/Uranus.vue";
import Neptune from "../views/Planet/Neptune.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/sun",
    name: "Sun",
    component: Sun
  },
  {
    path: "/sun",
    name: "Sun",
    component: Sun
  },

  {
    path: "/mercury",
    name: "Mercury",
    component: Mercury
  },
  {
    path: "/venus",
    name: "Venus",
    component: Venus
  },
  {
    path: "/earth",
    name: "Earth",
    component: Earth
  },
    {
    path: "/mars",
    name: "Mars",
    component: Mars
  },
    {
    path: "/jupiter",
    name: "Jupiter",
    component: Jupiter
  },
    {
    path: "/saturn",
    name: "Saturn",
    component: Saturn
  },
    {
    path: "/uranus",
    name: "Uranus",
    component: Uranus
  },
  {
    path: "/neptune",
    name: "Neptune",
    component: Neptune
  },
  {
    path: "*",
    redirect: '/'
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
