import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//api key 39ee1f0cc774e3b3ec5817764b7d776b
// api.openweathermap.org/data/2.5/weather?zip=65804&units=imperial&appid=34e151b21432559dffb5558922b0756a

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
