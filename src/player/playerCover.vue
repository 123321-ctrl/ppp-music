<template>
  <div class="playercover" v-if="songUrl">
    <div
      class="cover-left"
      @mouseenter="isShow = true"
      @mouseleave="isShow = false"
    >
      <el-avatar shape="square" :size="80" :src="songUrl.pic"></el-avatar>
      <div class="mask" v-show="isShow">
        <span class="iconfont icon-zuidahua"></span>
      </div>
    </div>
    <div class="cover-right">
      <div class="name">{{ songUrl.name }}</div>
      <div>{{ songUrl.artist }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "playerCover",
  props: ["songUrl"],
  data() {
    return {
      isShow: false,
    };
  },
};
</script>

<style lang="less" scoped>
.playercover {
  width: 17%;
  position: absolute;
  top: -142%;
  left: 0px;
  z-index: 1;
  padding-left: 10px;
  display: flex;
  .cover-right {
    font-size: 15px;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    padding: 6px 10px;
    .name {
      font-weight: 600;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }
  }
}
.mask {
  width: 80px;
  height: 80px;
  background-color: rgba(128, 128, 128, 0.473);
  z-index: 2;
  position: absolute;
  top: 0%;
  left: 10px;
  span{
    font-size: 80px;
    color: white;
}
}

</style>