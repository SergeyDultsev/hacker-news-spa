import "@/assets/styles/global.scss";

import { createApp } from 'vue'

import { setupPinia } from "@/app/lib/setup-pinia";
import { setupRoutes } from "@/app/lib/setup-router";
import { setupPhosphorIcons } from "@/app/lib/setup-phosphorIcon";

import App from './App.vue'

const app = createApp(App);
setupRoutes(app);
setupPinia(app);
setupPhosphorIcons(app);
app.mount('#app')
