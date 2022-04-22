import { createApp } from 'vue'
import App from './App.vue'
import PQGBuilder from "./pqgbuilder/PQGBuilder"

new PQGBuilder();


createApp(App).mount('#app')
