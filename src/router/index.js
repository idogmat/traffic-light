import Router from 'vue-router'
import trafficTimer from "../main";

const screenGreen = {
  data: function () {
    return {
      stime: (trafficTimer.green - trafficTimer.blink)
    }
  },
  template: '<traffic-container activeColor="green" :solidTime="stime"></traffic-container>'
}

const screenYellow = {
  data: function () {
    return {
      stime: (trafficTimer.yellow - trafficTimer.blink)
    }
  },
  template: '<traffic-container activeColor="yellow" :solidTime="stime"></traffic-container>'
}

const screenRed = {
  data: function () {
    return {
      stime: (trafficTimer.red - trafficTimer.blink)
    }
  },
  template: '<traffic-container activeColor="red" :solidTime="stime"></traffic-container>'
}
export default new Router({
  routes: [
    {
      path: '/', redirect: '/green',
      component: screenGreen,
    },
    {
      path: '/green',
      component: screenGreen,
    },
    {
      path: '/yellow',
      component: screenYellow,
    },
    {
      path: '/red',
      component: screenRed,
    }
  ]
})

