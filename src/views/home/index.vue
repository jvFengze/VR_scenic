<template>
  <div id="box" style="position: relative;width: 100%;height: 100%;">
    <headerBox></headerBox>
    <div id="threeBox" >
      <div class="textBox">
        <span class="in-view">足不出户,云游千里</span>
        <span></span>
      </div>
    </div>
    <div id="mark0" style="height: 20px; margin-top: 120px;"></div>
    <div class="mainBox">
      <span class="mainText">VR智慧景区导览</span>
      <div id="mark1" style="height: 30px;"></div>
      <span class="mainText smallText">创造更加逼真的游览体验,让您更好地了解景区内的景点和历史文化，增强您的旅游体验</span>
    </div>
    <div class="markn" style="height: 50px;"></div>
    <div class="cardBox">
      <div class="cardContener" style="display: flex;">
        <div class="card">
          <div class="overlay"></div>
          <img src="/public/picture/vr1.webp">
        </div>
        <div class="card">
          <div class="overlay"></div>
          <img src="/public/picture/travel.webp">
        </div>
        <div class="card">
          <div class="overlay"></div>
          <img src="/public/picture/vr.jpg">
        </div>
        <div class="card">
          <div class="overlay"></div>
          <img src="/public/picture/travel.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import headerBox from '../../components/header.vue';
  export default {
  components:{
    headerBox
  }
}
</script>
<script setup>
import { getCurrentInstance, onMounted } from "vue";
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

let { proxy } = getCurrentInstance();
let THREE = proxy.$THREE;

let scene,camera,renderer,sphere;
let login = true;
function createThree(){
  
}
onMounted(() => {
  let threeBox = document.getElementById("threeBox");
  //创建场景
  scene = new THREE.Scene();

  //创建照相机
  camera = new THREE.PerspectiveCamera(60,window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0 , 0.01)

  //创建渲染器 (画布)
  renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setPixelRatio(window.devicePixelRatio) 
  renderer.setSize(window.innerWidth, window.innerHeight); //canvas 画布大小
    threeBox.appendChild(renderer.domElement);
  // 相机控制器
  let controls = new OrbitControls(camera, renderer.domElement);
  controls.enableZoom = false;
  // 创建几何球体
  let sphereGeometry = new THREE.SphereGeometry(/*半径*/1, /*垂直节点数量*/50, /*水平节点数量*/50);
  // 创建材质并加载贴图
  let texture = new THREE.TextureLoader().load('/picture/400.jpg');
  texture.encoding = THREE.sRGBEncoding
  // texture.magFilter = THREE.NearestFilter
  //     texture.minFilter = THREE.NearestFilter
  texture.magFilter = THREE.LinearFilter; // 放大过滤器
  texture.minFilter = THREE.LinearMipMapLinearFilter; // 缩小过滤器和Mipmap
  texture.generateMipmaps = true; // 生成Mipmap
  let sphereMaterial = new THREE.MeshBasicMaterial({map:texture, side: THREE.DoubleSide});
  // 创建网格
  sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
  // sphere.material.wireframe  = true;
  scene.add(sphere);
  loop();
});
function onUnload() {
    // 清理three.js资源
    if (renderer) {
        renderer.forceContextLoss(); // 强制context失效
        renderer.domElement = null;
        renderer = null;
    }
    if (camera) {
        camera = null;
    }
    if (scene) {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.geometry.dispose();
                if (child.material) child.material.dispose();
            }
        });
        scene = null;
    }
}
window.addEventListener('unload', onUnload)
function loop(){  
  renderer.render(scene, camera);
  sphere.rotateY(0.001);
  requestAnimationFrame(loop);  
};
// 自适应
window.addEventListener("resize",()=>{
  // 更新摄像头
  camera.aspect = window.innerWidth / window.innerHeight;
  //   更新摄像机的投影矩阵
  camera.updateProjectionMatrix();
  //   更新渲染器
  renderer.setSize(window.innerWidth, window.innerHeight);
  //   设置渲染器的像素比
  renderer.setPixelRatio(window.devicePixelRatio);
});
function toHomePage(){
  console.log('nihao');
}
// 下端动画
// 检查盒子是否在视口内
function isInViewPort(element){
  // console.log(element);
  // 盒子相对于视口的位置信息
  const rect = element.getBoundingClientRect();
  return(
    rect.top >=0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    // rect.top >=0
  )
}
// 监听滚动事件
function onScroll(){
  let mark = [];
  for(let i = 0; i < 2; i++){
    mark.push(document.getElementById('mark'+[i]))
  }
  // mark = document.getElementById('mark')
  let mainBox = document.getElementsByClassName('mainText');
  let cardArr = document.getElementsByClassName('card');
  let markn = document.getElementsByClassName('markn');
  for(let i = 0; i < mainBox.length; i++){
    if(isInViewPort(mark[i])){
      mainBox[i].classList.add('in-view');
    }else{
      mainBox[i].classList.remove('in-view')
    }
  }
  for(let i = 0; i < cardArr.length; i++){
    if(isInViewPort(markn[0])){
        cardArr[i].classList.add('in-anim'+[i])
    }else{
      cardArr[i].classList.remove('in-anim'+[i])
    }
  }
}
window.addEventListener('load', onScroll);
window.addEventListener('scroll', onScroll)
</script>

<style scoped>
/* @import '../../style/topBut.css'; */
img{
  height: 500px;
  width: 350px;
}
.overlay{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}
.threeBox{
  position: absolute;
  top: 0;
}
.textBox{
  margin-left: 1rem;
  text-shadow: 2px 2px 5px rgb(118, 113, 113),-2px -2px 5px rgb(118, 113, 113);
  position: absolute;
  top: 40%;
  color: aliceblue;
  font-size: 0.2rem;
  font-weight: 800;
  display: flex;
  flex-direction: column;
}
.mainBox{
  /* opacity: 0; */
  font-size: 40px;
  font-weight: 900s;
  height: 100px;
  color: rgb(0, 0, 0);
}
.mainText{
  opacity: 0;
  display: block;
  /* color: rgb(0, 0, 0); */
  /* transition: all 1s; */
}
.in-view {
  animation: fadeIn 1s ease-in-out forwards;
}
@keyframes fadeIn{
  0% { opacity: 0;transform: translateY(20px); }
  100% { opacity: 1;transform: translateY(0); }
}
.smallText{
  font-size: 20px;
  font-weight: 800;
  color: rgb(92, 91, 91);
}
.cardBox{
  /* margin-top: 50px; */
  height: 500px;
  display: flex;
  justify-content: center;
}
.cardContener{
  border: 0px solid;
  height: 400px;
  width: 80%;
  min-width: 1228px;
  border-radius: 10px;
  margin-left: 30px;
  margin-right: 30px;
  display: flex;
  justify-content: center;
  overflow: hidden;
}
.card{
  width: 25%;
  height: 0;
  transition: all 0.5s;
  position: relative;
}
.card:hover{
  width: 30%;
}
.in-anim0{
  animation: tranCard1 1.6s ease-in-out forwards;
}
@keyframes tranCard1{
  0% { transform: translateY(400px);height: 0; }
  100% { transform: translateY(0);height: 400px; }
}
.in-anim1{
  animation: tranCard2 1.2s ease-in-out forwards;
}
@keyframes tranCard2{
  0% { transform: translateY(400px);height: 0; }
  100% { transform: translateY(0);height: 400px; }
}
.in-anim2{
  animation: tranCard3 0.8s ease-in-out forwards;
}
@keyframes tranCard3{
  0% { transform: translateY(400px);height: 0; }
  100% { transform: translateY(0);height: 400px; }
}
.in-anim3{
  animation: tranCard4 0.4s ease-in-out forwards;
}
@keyframes tranCard4{
  0% { transform: translateY(400px);height: 0; }
  100% { transform: translateY(0);height: 400px; }
}

</style>
