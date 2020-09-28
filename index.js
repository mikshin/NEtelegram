import Vue from 'vue'
import store from './store'
import App from './App'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  store
})
