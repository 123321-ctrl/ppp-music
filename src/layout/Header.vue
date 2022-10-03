<template>
  <div :class="headerClass">
    <div class="title">
      <span class="iconfont icon-home" @click="handleHomeButton"></span>
      <span
        class="iconfont icon-suoxiao"
        @click="handleExistMaxScreen"
        :plain="true"
      ></span>
      <span
        class="iconfont icon-fangda"
        @click="handleMaxScreen"
        :plain="true"
      ></span>
    </div>
    <div class="goandback">
      <span class="iconfont icon-zuojiantou" @click="go(-1)"></span>
      <span class="iconfont icon-youjiantou" @click="go(1)"></span>
    </div>
    <div class="main">
      <div class="left">
        <my-search></my-search>
      </div>
      <div class="right">
        <div class="switch" @click="switchChange">
          <span class="iconfont icon-lieri" v-show="value1"></span>
          <span class="iconfont icon-yejing" v-show="!value1"></span>
        </div>

        <span class="iconfont icon-touxiang"></span>
        <!-- <span class="iconfont icon-clothes"></span> -->
        <span class="iconfont icon-github"></span>
      </div>
    </div>
  </div>
</template>

<script>
import {
  isFullScreen,
  exitFullscreen,
  requestFullScreen,
} from "../utils/window";
import mySearch from "../components/content/search/index.vue";
export default {
  name: "LayoutHeader",
  components: {
    mySearch,
  },
  data() {
    return {
      value1: true,
    };
  },
  computed:{
    theme(){
      return this.$store.state.theme
    },
    headerClass(){
      return ['header',`${this.theme + '-theme'}`]
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    handleHomeButton() {
      this.$router.push("/individuation");
    },
    // 缩小
    handleExistMaxScreen() {
      if (isFullScreen()) {
        exitFullscreen();
      } else {
        this.$message.warning("您已退出全屏模式");
      }
    },
    //放大
    handleMaxScreen() {
      if (isFullScreen()) {
        this.$message.warning("您已处于全屏模式");
      } else {
        requestFullScreen();
      }
    },
    go(index) {
      this.$router.go(index);
    },
    switchChange(){
      this.value1 = !this.value1
      if(this.value1){
        this.$store.commit("setTheme", "light");
      }else{
        this.$store.commit("setTheme", "dark");
      }
    },
  },
};
</script>
<style lang="less" scoped>
@import '../utils/theme.less';
.light-theme{
  background-color: @lightTheme;
  color: @lightFontColor;
}
.dark-theme{
  background-color: @darkTheme;
  color: @darkFontColor;
}
.header {
  display: flex;
  align-items: center;
  height: 58px;
  width: 100%;
  line-height: 58px;
  // background-color: #e5e6eb;
}
.title {
  display: flex;
  width: 15%;
  height: 100%;
  text-align: center;
  span {
    flex: 1;
    justify-content: space-around;
    font-size: 25px;
  }
}
.goandback {
  display: flex;
  width: 10%;
  height: 100%;
  text-align: center;
  span {
    flex: 1;
    justify-content: space-around;
    font-size: 30px;
  }
}
.main {
  width: 75%;
  height: 100%;
  display: flex;
  .left {
    flex: 4;
    text-align: center;
    display: flex;
    justify-content: flex-start;
  }
  .right {
    flex: 6;
    display: flex;
    justify-content: flex-end;
    .switch{
      padding: 1px 30px;
    }
    span {
      margin-right: 5%;
      font-size: 30px;
    }
  }
}
</style>