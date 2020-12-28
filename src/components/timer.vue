<template>
    <div class="traffic-container">
         <p>{{ counter }}</p>
    </div>
</template>

<script>
  export default {
    props: ['counter'],
    data: function () {
        return {
        }
    },
}
</script>

<style scoped>
.traffic-container{
  height: 50px;
  width: 50px;
}
</style>
