
import { ref,reactive} from 'vue';

export function isInViewPort(element){
  // console.log(element);
  // 盒子相对于视口的位置信息
  const rect = element.getBoundingClientRect();
  return(
    rect.top >=0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    // rect.top >=0
  )
};
export function onScroll(markBox, mainText, animation){
//   let mark = document.getElementById(markBox)
//   let mainBox = document.getElementsByClassName(mainText)
//   for(let i = 0; i < mainBox.length; i++){
//     if(this.isInViewPort(mark)){
//       mainBox[i].classList.add(animation);
//     }
//   }
  return markBox;
}