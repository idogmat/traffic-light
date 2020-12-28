<template>
  <div id="app">
      <div class="traffic-light">
        <router-view></router-view>
        <timer :counter="counter"></timer>
      </div>
  </div>
</template>

<script>
import timer from './components/timer.vue'
import trafficTimer from "./main";
export default {
  name: 'app',
  components: {
    timer
  },
  data () {
    return {
      nextColorBox: null,
      counter: 0,
      timeouts: []
    }
  },
  created(){
    this.initNextScreen(this.$route.path);
  },
  mounted() {
    this.$router.afterEach((to, from) => {
      this.initNextScreen(this.$route.path);
      this.timeouts.forEach(timeout => {clearTimeout(timeout)});
      this.timeouts = [];
      this.countDown();
    });
    this.countDown();
  },
  methods: {
    initNextScreen(path){
      switch (path){
        case '/':
        case '/green':
          this.counter = trafficTimer.green;
          this.nextColorBox = '/yellow';
          break;
        case '/yellow':
          this.counter = trafficTimer.yellow;
          this.nextColorBox = '/red';
          break;
        case '/red':
          this.counter = trafficTimer.red;
          this.nextColorBox = '/green';
          break;
      }
    },
    countDown(){
      if (this.counter) {
        let newTimeout = setTimeout(() => {
          --this.counter;
            this.countDown()
        }, 1000);
        this.timeouts.push(newTimeout);
        return newTimeout;
      }
      this.$router.push(this.nextColorBox);
    }
  }
}
</script>

<style>
.traffic-light {
  width: 30vh;
  height: 70vh;
  min-height: 400px;
  border-radius: 5vh;
  margin: auto;
  background: #333333;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>
