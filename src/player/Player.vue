<template>
  <div class="player">
    <playerCover :songUrl="songUrl"></playerCover>
    <div class="player-toggle">
      <div class="player-toggle-item">
        <i class="iconfont icon-previous"></i>
      </div>
      <div class="player-toggle-item">
        <i class="iconfont icon-bofang1"></i>
        <i class="iconfont icon-zanting"></i>
      </div>
      <div class="player-toggle-item">
        <i class="iconfont icon-next"></i>
      </div>
    </div>
    <div class="handleAudio">
      <audio controls :src="songUrl ? songUrl.url : null" autoplay></audio>
    </div>
  </div>
</template>

<script>
import playerCover from "./playerCover.vue";
export default {
  name: "MusicPlayer",
  props: ["songUrl"],
  components: {
    playerCover,
  },
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style lang="less" scoped>
.player {
  display: flex;
}
.player-toggle {
  width: 17%;
  line-height: 60px;
  display: flex;
  justify-content: center;
  padding: 0 5px;
  .player-toggle-item {
    padding: 0px 20px;
    cursor: pointer;
    i {
      font-size: 30px;
    }
  }
}
.handleAudio {
  width: 60%;
  audio {
    width: 100%;
  }
}
</style>