import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './Lib/mui/css/mui.css'
import './Lib/mui/font-awesome-4.7.0/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

import store from './store'
import axios from 'axios'
var app=createApp(App)
axios.defaults.timeout = 3000
app.config.globalProperties.$http = axios
app.use(store).use(router).use(ElementPlus).mount('#app')



