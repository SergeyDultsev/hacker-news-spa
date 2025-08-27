import { createApp } from 'vue'
import App from './App.vue'
import routes from "./router";
import "@/assets/styles/global.scss";

const app = createApp(App);
app.use(routes)
app.mount('#app')
