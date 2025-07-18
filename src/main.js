import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
const originFetch = window.fetch;
window.fetch = function(path, option) {
    const url = new URL(path, 'https:212.193.30.175:5046')
    return originFetch(url, option);s
}
createApp(App).mount('#app')
