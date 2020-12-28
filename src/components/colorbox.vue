<template>
  <div class="stoplight__color" :class="{ color_green : isGreen, color_yellow : isYellow,
    color_red : isRed, color_active : active,  color_blinking : isBlinking }">
  </div>
</template>

<script>
  export default {
    props: ['color', 'active', 'blinking'],
    data: function () {
        return {
            isGreen: false,
            isYellow: false,
            isRed: false,
        }
    },
    created() {
        switch (this.color){
            case 'green':
                this.isGreen = true;
                break;
            case 'yellow':
                this.isYellow = true;
                break;
            case 'red':
                this.isRed = true;
                break;
        }
    },
    computed: {
        isBlinking() {
            if (this.blinking){
                return true;
            }
            else{
                return false;
            }
        }
    },
}
</script>
<style>
@keyframes start_blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.2;
  }
}
.color_blinking {
  animation: start_blink 0.5s linear infinite alternate
}

.stoplight__color {
  width: 15vh;
  height: 15vh;
  border-radius: 7.5vh;
  margin: 10px;
  opacity: 0.2;
}
.color_active {
  opacity: 1;
}
.color_green {
  background: #27AE60;
}
.color_red {
  background: #EB5757;
}
.color_yellow {
  background: #F2C94C;
}
</style>
