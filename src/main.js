import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "font-awesome/css/font-awesome.css";
import VueMeta from "vue-meta";

createApp(App).use(router).mount("#app");
createApp(App).use(VueMeta).mount("#app");
