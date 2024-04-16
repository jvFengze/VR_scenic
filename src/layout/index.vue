<template>
  <div class="screen-wrapper" ref="screenWrapper" :style="wrapperStyle">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref } from 'vue'
function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    timer = setTimeout(
      () => {
        typeof fn === "function" && fn.apply(null, args);
        clearTimeout(timer);
      },
      delay > 0 ? delay : 100
    );
  };
}
</script>

<style scoped>
.screen-wrapper {
  height: 100%;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
  position: relative;
  overflow: hidden;
  z-index: 100;
  transform-origin: left top;
}
</style>
