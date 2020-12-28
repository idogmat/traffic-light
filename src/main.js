import Vue from 'vue'
import App from './App'
import Router from "vue-router";
import router from './router'
import TrafficContainer from './components/traffic-container.vue'

Vue.component('traffic-container', TrafficContainer);
Vue.config.productionTip = false
Vue.use(Router)

const trafficTimer = {
  green: 15,
  yellow: 3,
  red: 10,
  blink: 3,
}
export default trafficTimer
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
