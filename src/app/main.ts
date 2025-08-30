import { createApp } from 'vue'
import App from './App.vue'
import routes from "@/app/router";
import { pinia } from "@/app/pinia";
import "@/assets/styles/global.scss";

const app = createApp(App);
app.use(routes)
app.use(pinia);
app.mount('#app')
