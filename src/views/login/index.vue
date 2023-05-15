<template>
  <div
    style="height: 350px;
    width: 480px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);">
      <div class="title" style="font-size: 28px; margin-bottom: 20px;">输入账号登录</div>
      <div class="form" v-if="state === true">
        <el-input
          class="ys"
          v-model="ruleForm.userName"
          placeholder="Please input"
          style="max-width: 300px;"
          >
            <template #suffix>
              <el-icon class="el-input__icon" @click="asd()" v-if="qwe === true"><Right /></el-icon>
              <el-icon v-else class="loading"><Loading /></el-icon>
            </template>
        </el-input>
      </div>
      <div class="form" v-else>
        <el-input
          class="ym1"
          v-model="ruleForm.userName"
          placeholder="Please input"
          style="max-width: 300px;"
          disabled
          >
          <template #suffix>
            <el-icon class="el-input__icon"><Check /></el-icon>
          </template>
        </el-input>
        <el-input
          class="ym2"
          v-model="ruleForm.passWord"
          placeholder="Please input"
          style="max-width: 300px;"
          type= password
          >
          <template #suffix>
            <el-icon class="el-input__icon" @click="submit()"><Right /></el-icon>
          </template>
        </el-input>
      </div>
      <el-divider 
        style="margin-top: 20px; 
        width: 200PX;
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%,-50%);" />
  </div>
  <div>
    <el-checkbox class="remeber" v-model="checked" label="记住我的账号" size="large" />
  </div>
  <div style="font-size: 15px;" class="register">
          没有账号?
          <el-button type="primary" link style="font-size: 15px;">
            点击注册
            <el-icon><TopRight /></el-icon>
          </el-button>
        </div>
</template>

<script setup>
  import {ref, reactive} from 'vue'
  let state = ref(true);
  let qwe = ref(true);
  let checked = ref(false);
  let ruleForm = reactive({
  passWord: '',
  userName: '',
});
(function () {

})();
function asd(){
  qwe.value = false
  setTimeout(() =>{
    state.value = false
  },1000)
};
function submit(){
  const payload = {
    account: ruleForm.userName,
    passWord: ruleForm.passWord
  }
}
</script>

<style scoped>
.ys{
  height: 55px;
  border-radius: 20px;
}
.ys >>> .el-input__wrapper{
  border-radius: 20px;
}
.ym1{
  height: 55px;
  border-radius: 20px 20px 0 0;
}
.ym1 >>>.el-input__wrapper{
    border-radius: 20px 20px 0 0;
}
.ym2{
  height: 55px;
  border-radius: 0 0 20px 20px;
}
.ym2 >>> .el-input__wrapper{
    border-radius: 0 0 20px 20px;
}
.ys >>> .el-input__inner{
 font-size:15px !important;
}
.ys >>> .el-icon{
  font-size: 30px;
}
.ym1 >>> .el-input__inner{
 font-size:15px !important;
}
.ym1 >>> .el-icon{
  font-size: 30px;
}
.ym2 >>> .el-input__inner{
 font-size:15px !important;
}
.ym2 >>> .el-icon{
  font-size: 30px;
}
.register{
  position: absolute;
  top: 57%;
  left: 50%;
  transform: translate(-50% , -50%);
}
.remeber{
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translate(-50% , -50%);
}
.loading{
  animation: loading 2.5s infinite;
}
@keyframes loading {
  to{
    transform: rotate(360deg) ;
  }
}
</style>