<script setup>
  function setRemUnit(){
    var rem = document.documentElement.clientWidth / 6.4;
    document.documentElement.style.fontSize = rem + 'px'
  }
  setRemUnit()
  window.addEventListener('resize', () => {
    setRemUnit()
  })
</script>

<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
