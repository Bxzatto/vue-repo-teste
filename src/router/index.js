import Vue from "vue";
import VueRouter from "vue-router";
import FavoritesPage from "../views/Favorites.vue";
import SearchPage from "../views/Search.vue";
import RepositoryDetailsPage from "../views/RepositoryDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: SearchPage,
  },
  {
    path: "/favoritos",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: FavoritesPage,
  },
  {
    path: "/Detalhes",
    name: "details",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: RepositoryDetailsPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
