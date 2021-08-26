import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'
import '@imengyu/vue3-context-menu/lib/vue3-context-menu.css';

import * as Vue from "vue";
import App from "./App.vue";
import ContextMenu from "@imengyu/vue3-context-menu";

Vue.createApp({
  render: h => Vue.h(App)
}).use(ContextMenu).mount("#app");
