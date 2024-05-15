<template>
  <div class="container" @click="toScenic()">

  </div>
</template>


<script setup>
const props = defineProps({
  //子组件接收父组件传递过来的值
  cardId: String,
})
const {cardId} = props
function toScenic(){
    console.log(props);
}
</script>

<style scoped>
 .container{
    margin: 10px;
    background-color: black;
    height: 200px;
    width: 350px;
    border: 0px;
    border-radius: 5px;
    min-width: 350px;
 }
</style>
