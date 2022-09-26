<template>
  <div class="footer">
    <MusicPlayer :songUrl="songUrl"></MusicPlayer>
  </div>
</template>

<script>
import MusicPlayer from "../player/Player.vue";
export default {
  name: "LayoutFooter",
  components: {
    MusicPlayer,
  },
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  computed:{
    songUrl(){
      return this.$store.state.songUrl
    }
  }
};
</script>
<style scoped>
.footer {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 60px;
}
</style>