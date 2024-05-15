<template>
    <div id="panorama">
      <div class="medium">
        <!-- <div style="position: relative;"> -->
        <div class="listBut"></div>
        <div class="listBut"></div>
        <div class="listBut"></div>
        <div class="listBut"></div>
      </div>
      <!-- </div> -->
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
let viewer = null;
onMounted(() => {
  // document.getElementsByClassName('pnlm-compass')[0].style.top = '0',
  // document.getElementsByClassName('pnlm-compass')[0].style.bottom = 'auto'
  init().then(()=>{});
})
function init(){
  try {
        viewer = new window.pannellum.viewer('panorama', {
          'type': 'equirectangular',
          'panorama': '/picture/scene.jpg',
          "autoLoad": true, //自动播放
          // "autoRotate": -5, //每秒转动角度
          // "autoRotateInactivityDelay":2000, //点击屏幕n秒后自动旋转
          "title": "张建乐园", //名字
          // "compass": true, //指南针
          // "hotSpotDebug": true,
          "hotSpots": [
              {
                  "pitch": 14.1, // X轴（左耳到右耳）旋转（正数往上，负数往下）
                  "yaw": 1.5, // y轴（从脚到头）旋转
                  "type": "info", // 热点类型
                  "text": "天花板", // 划入文字
                  // "URL": "https://www.baidu.com" // 点击跳转
              },
              {
                  "pitch": -9.4,
                  "yaw": 222.6,
                  "type": "info",
                  "text": "椅子"
              },
              {
                  "pitch": -0.9,
                  "yaw": 144.4,
                  "type": "info",
                  "text": "天空"
              }
          ]
        });
        return Promise.resolve();
      } catch (error) {
        return Promise.reject(error);
      }
}
window.addEventListener('contextmenu', function(e) {
    this.document.getElementsByClassName('pnlm-about-msg')[0].style.display = 'none';
});
</script>

<style scoped>
#panorama{
  height: 100vh;
  width: 100vw;
  position: relative;
  font-size: 16px;
}

.medium{
  position: absolute;
  height: 300px;
  width: 50px;
  background-color: rgb(0, 0, 0);
  border: 0px;
  border-radius: 5px;
  z-index: 100;
  right: 10px;
  bottom: 200px;
  display: flex;
  flex-direction: column;
}
.listBut{
  height: 78px;
  width: 50px;
  background-color: antiquewhite;
  margin-bottom: 1px;
}
</style>
  