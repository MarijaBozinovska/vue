import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ProductsPage from "@/views/ProductsPage.vue";
import DetailsPage from "@/views/DetailsPage.vue";

const routes = [
  {
    path: "/",
    name: HomePage,
    component: HomePage,
  },
  {
    path: "/products",
    name: ProductsPage,
    component: ProductsPage,
  },
  {
    path: "/details",
    name: DetailsPage,
    component: DetailsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
