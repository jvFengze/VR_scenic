<template>
  <div class="contant">
    <headerBox></headerBox>
  </div>
  <div class="scroll_box">
    <div class="brief_introduction" @click="toScenic()">
      <div class="search">
        <div class="searchText">don't fear the unknow</div>
        <input type="text" name="username" placeholder="我想去......">
        <div @click="toScenicList()" class="searchBut">
          <svg t="1713598960404" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="7609" width="48" height="48">
            <path d="M742 626.5c-30.6 48.4-72.4 88.9-121.9 117.8l199 199L939 823.5l-197-197z" fill="#e6e6e6"
              p-id="7610"></path>
            <path
              d="M441.1 809.8C235.6 809.8 68.3 642.6 68.3 437c0-205.6 167.2-372.8 372.8-372.8 205.6 0 372.8 167.2 372.8 372.8 0 205.6-167.2 372.8-372.8 372.8z m0-711.8c-186.9 0-339 152.1-339 339s152.1 339 339 339 339-152.1 339-339-152-339-339-339z"
              fill="#e6e6e6" p-id="7611"></path>
            <path
              d="M819.1 960.2c-4.3 0-8.7-1.7-12-5l-199-199c-3.7-3.7-5.5-8.9-4.8-14.1 0.7-5.2 3.7-9.8 8.3-12.4 47-27.4 87.1-66.2 116.1-112.2 2.7-4.3 7.3-7.2 12.4-7.8 5-0.5 10.2 1.2 13.8 4.9l197 197c3.2 3.2 5 7.5 5 12s-1.8 8.8-5 12L831.1 955.3c-3.3 3.3-7.7 4.9-12 4.9z m-172-212.8l172 172 95.9-95.9L744.6 653c-26.5 37.1-59.7 69.2-97.5 94.4zM626.2 267.1c-4.7 0-9.4-1.9-12.7-5.8C505 137.4 348 213.8 346.4 214.6c-8.3 4.1-18.5 0.8-22.7-7.6-4.2-8.4-0.8-18.5 7.6-22.7 1.8-0.9 182.2-88.8 307.7 54.7 6.1 7 5.4 17.7-1.6 23.9-3.3 2.8-7.2 4.2-11.2 4.2z"
              fill="#e6e6e6" p-id="7612"></path>
          </svg>
        </div>
      </div>
      <div class="scenicName">{{ scenicName }}</div>
      <div class="toUp" @click="toUp()">
        <svg t="1713594692376" class="icon1" viewBox="0 0 1414 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="3487" width="128px" height="128px">
          <path
            d="M271.224593 335.797077l408.802285 404.972283c0.604737 0.604737 1.411053 0.806316 2.01579 1.310264 0.10079 0.10079 0.201579 0.403158 0.302369 0.503948 14.513691 14.412901 37.997648 14.312112 52.410549-0.201579L1139.694272 333.680497c14.412901-14.513691 14.312112-37.896859-0.201579-52.30976-7.189652-7.088863-16.697463-10.683689-26.104485-10.683689-9.507811 0-19.082815 3.695616-26.306064 10.986057L707.911977 664.270116 323.332773 283.285738c-7.189652-7.088863-16.596674-10.683689-26.104485-10.683689-9.608601 0-19.082815 3.695616-26.306064 10.986057C256.54292 297.900218 256.744499 321.384176 271.224593 335.797077L271.224593 335.797077z"
            fill="#f6fcff" p-id="3488"></path>
        </svg>
      </div>
      <div class="toNext" @click="toNext()">
        <svg t="1713594692376" class="icon" viewBox="0 0 1414 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="3487" width="128px" height="128px">
          <path
            d="M271.224593 335.797077l408.802285 404.972283c0.604737 0.604737 1.411053 0.806316 2.01579 1.310264 0.10079 0.10079 0.201579 0.403158 0.302369 0.503948 14.513691 14.412901 37.997648 14.312112 52.410549-0.201579L1139.694272 333.680497c14.412901-14.513691 14.312112-37.896859-0.201579-52.30976-7.189652-7.088863-16.697463-10.683689-26.104485-10.683689-9.507811 0-19.082815 3.695616-26.306064 10.986057L707.911977 664.270116 323.332773 283.285738c-7.189652-7.088863-16.596674-10.683689-26.104485-10.683689-9.608601 0-19.082815 3.695616-26.306064 10.986057C256.54292 297.900218 256.744499 321.384176 271.224593 335.797077L271.224593 335.797077z"
            fill="#f6fcff" p-id="3488"></path>
        </svg>
      </div>
    </div>

    <section class="prev" data-id="0"></section>
    <section class="cur" data-id="1"></section>
    <section class="next" data-id="2"></section>
  </div>
  <div id="markn" class="markn"></div>
  <div style="height: 100vh; position: relative;">
    <div class="findText">为 您 找 到</div>
    <div class="scenicList">
      <scenicCard v-for="(item, i) in list" :cardId=i></scenicCard>
      <p style="width: 400px;font-size: 15px;color: rgb(0, 0, 0,0.4);font-weight: 800;margin-top: 30px;">
        ————————到底啦~————————</p>
    </div>
  </div>
</template>

<script>
import headerBox from '../../components/header.vue';
import scenicCard from '../../components/scenicCard.vue'
import router from "../../router";
export default {
  components: {
    headerBox,
    scenicCard
  }
}
</script>
<script setup>
import { onMounted, watch, ref } from "vue";
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const imgs = [
  '/picture/宝寿山.jpg',
  '/picture/黄果树.jpg',
  '/picture/丽水.webp'
];
const scenicNameList = [
  '宝寿山',
  '黄果树',
  '丽水',
]
let container, cur, prev, next, scenicNameBox;
let cur_id = ref();
let isTransition = false;
let scenicName = ref('黄果树');
onMounted(() => {
  // window.addEventListener('scroll', handleScroll)
  cur = document.querySelector('.scroll_box .cur');
  prev = document.querySelector('.scroll_box .prev');
  next = document.querySelector('.scroll_box .next');
  container = document.querySelector('.scroll_box');
  scenicNameBox = document.querySelector('.scenicName')
  cur_id.value = cur.dataset.id;
  // console.log(typeof(cur_id.value));
  CreatScroll_Img(parseInt(cur_id.value));
})
watch(
  cur_id, (newValue, oldValue) => {
    scenicName.value = scenicNameList[cur_id.value];
    scenicNameBox.classList.add('box_transfrom')
    setTimeout(() => {
      scenicNameBox.classList.remove('box_transfrom');
    }, 1000)
  }
)
function CreatScroll_Img(cur_id) {
  const prev_id = cur_id === 0 ? imgs.length - 1 : cur_id - 1;
  const next_id = cur_id === imgs.length - 1 ? 0 : cur_id + 1;
  cur.style.background = `url(${imgs[cur_id]}) no-repeat center/cover`
  next.style.background = `url(${imgs[next_id]}) no-repeat center/cover`
  prev.style.background = `url(${imgs[prev_id]}) no-repeat center/cover`

}
function scroll_Img(prevOrNext, cur) {
  prevOrNext.style.transition = 'height 1s';
  prevOrNext.style.height = '100vh';
  setTimeout(() => {
    prevOrNext.style.transition = 'none';
    cur.style.background = `url(${imgs[cur_id.value]}) no-repeat center/cover`;
    prevOrNext.style.height = '0';
    prevOrNext.style.offsetWidth;
    CreatScroll_Img(cur_id.value);
    isTransition = false;
  }, 1100)
}
function toNext() {
  if (isTransition === true) return;
  isTransition = true;
  cur_id.value = (cur_id.value + 1) % imgs.length;
  scroll_Img(next, cur)
}
function toUp() {
  if (isTransition === true) return;
  isTransition = true;
  cur_id.value--;
  if (cur_id.value < 0) cur_id.value = imgs.length - 1;
  scroll_Img(prev, cur)
}
// // 获取滚轮高度
// let scrollHeight; // 当前滚动高度
// let metaHeight = 15; // 最小滚动距离
// let metaTime = 10; //最小执行时间
// let targetHeight = 0; //目标区域滚动高度
// function handleScroll() {
//   let scrollTop = document.documentElement.scrollTop;
//   scrollHeight = scrollTop;
// }
// // 滚动方法
// function toArea() {
//   targetHeight = 734;
//   let x = targetHeight - scrollHeight;
//   document.documentElement.scrollTop += x % metaHeight;
//   x -= x % metaHeight;
//   const goto = setInterval(() => { // 建立执行操作的定时器
//     document.documentElement.scrollTop += metaHeight; // 控制移动滚动条
//     x -= metaHeight; // 缩减高度差
//     if (x === 0) { // 到达指定位置后清除定时器
//       clearInterval(goto); //清除定时器
//     }
//   }, metaTime);
// }
function toScenicList() {
  const markn = document.getElementById('markn');
  markn.scrollIntoView();
}
// 监听滚动事件
// document.addEventListener('wheel', e=>{
//   if(isTransition === true) return;
//   isTransition = true;
//   // console.log(e.deltaY);
//   if(e.deltaY > 0){
//     cur_id.value = (cur_id.value + 1) % imgs.length;
//     scroll_Img(next,cur)
//   }else{
//     cur_id.value--;
//     if(cur_id.value < 0) cur_id.value = imgs.length-1;
//     scroll_Img(prev,cur)
//   }
// })

function toScenic() {
  console.log(cur_id);
}
</script>

<style scoped>
.findText {
  color: rgb(0, 0, 0, 0.8);
  font-size: 30px;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translate(-50%);
  font-weight: 800;
}

.scenicList {
  overflow: scroll;
  background-color: antiquewhite;
  height: 68%;
  width: 78%;
  position: absolute;
  top: 25%;
  left: 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
}

.scenicList>p {
  align-self: center;
}

.searchText {
  color: white;
  font-size: 0.08rem;
  text-align: left;
  margin-left: 5%;
  margin-top: 2%;
}

.search {
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
  width: 2.3rem;
  height: 0.5rem;
  background-color: rgba(0, 0, 0, 0.652);
}

.searchBut {
  position: absolute;
  top: -12%;
  left: 92%;
  transform: translate(-50%, -50%);
}

.searchBut>svg {
  width: 100%;
  height: 30%;
  cursor: pointer;
}

.search>input {
  position: absolute;
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 30%;
  border: none;
  outline: none;
}

.icon1 {
  transform: rotate(180deg);
}

.scroll_box {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.scroll_box .cur {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: url('/public/picture/丽水.webp') no-repeat center/cover;
}

.scroll_box .prev {
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  height: 0;
  z-index: 1;
}

.scroll_box .next {
  overflow: hidden;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0;
  z-index: 1;
}

.scenicName {
  position: absolute;
  top: 50%;
  right: 0px;
  font-size: 0.5rem;
  color: rgba(255, 255, 255);
}

.brief_introduction {
  position: relative;
  z-index: 10;
  height: 100vh;
}

.toNext {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translate(-50%);
  cursor: pointer;
  opacity: 0.85;
}

.toUp {
  position: absolute;
  top: -70px;
  left: 50%;
  transform: translate(-50%);
  cursor: pointer;
  opacity: 0.85;
}

.box_transfrom {
  animation: appear 1s;
}

@keyframes appear {
  0% {
    transform: translateX(400px);
  }

  100% {
    transform: translateX(0px);
  }
}
</style>
