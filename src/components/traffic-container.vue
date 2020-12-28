<template>
    <div class="traffic-container">
        <colorbox color="green" :active="isGreen" :blinking="isBlinkingGreen"></colorbox>
        <colorbox color="yellow" :active="isYellow" :blinking="isBlinkingYellow"></colorbox>
        <colorbox color="red" :active="isRed" :blinking="isBlinkingRed"></colorbox>
    </div>
</template>

<script>
  import colorbox from './colorbox.vue'
  export default {
    name:'traffic-container',
    components: {
        colorbox
    },
    props: ['activeColor', 'solidTime'],
    data: function () {
        return {
            isGreen: false,
            isYellow: false,
            isRed: false,
            isBlinkingGreen: false,
            isBlinkingYellow: false,
            isBlinkingRed: false,
        }
    },
    created() {
        switch (this.activeColor){
            case 'green':
                setTimeout(() => {
                    this.isBlinkingGreen = true;
                    this.isBlinkingYellow = false;
                    this.isBlinkingRed = false;
                }, this.solidTime*1000);
                this.isGreen = true;
                break;
            case 'yellow':
                setTimeout(() => {
                    this.isBlinkingGreen = false;
                    this.isBlinkingYellow = true;
                    this.isBlinkingRed = false;
                }, this.solidTime*1000);
                this.isYellow = true;
                break;
            case 'red':
                setTimeout(() => {
                    this.isBlinkingGreen = false;
                    this.isBlinkingYellow = false;
                    this.isBlinkingRed = true;
                }, this.solidTime*1000);
                this.isRed = true;
                break;
        }
    },
}
</script>
<style>
.traffic-container {
  margin: auto;
  border-radius: 50px;
  background: #828282;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
