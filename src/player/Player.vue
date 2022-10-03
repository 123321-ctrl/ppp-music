<template>
  <div :class="playerClass">
    <playerCover
      :songUrl="songUrl"
      @togglePlayerPure="togglePlayerPure"
    ></playerCover>
    <transition
      name="player-pure-side"
      enter-active-class="animate__animated animate__slideInDown"
      leave-active-class="animate__animated animate__slideOutUp"
      :duration="{ enter: 400, leave: 400 }"
    >
      <player-pure
        @togglePlayerPure="togglePlayerPure"
        v-show="isPure"
        :songUrl="songUrl"
        :lyric="lyric"
        :currentTime="currentTime"
      />
    </transition>
    <div class="player-toggle">
      <div class="player-toggle-item">
        <i class="iconfont icon-previous"></i>
      </div>
      <div class="player-toggle-item" @click="toggle">
        <i class="iconfont icon-bofang1 weizhi" v-show="!isPlay"></i>
        <i class="iconfont icon-zanting weizhi" v-show="isPlay"></i>
      </div>
      <div class="player-toggle-item">
        <i class="iconfont icon-next"></i>
      </div>
    </div>
    <!-- 没有controls就不会显示audio -->
    <audio
      :src="songUrl ? songUrl.url : null"
      autoplay
      ref="audio"
      @timeupdate="audioTimeUpdate"
      @play="playLoad"
      @ended="musicEnded"
      @playing="musicPlaying"
    ></audio>
    <div class="progress">
      <span>{{ getCurrentTime }}</span>
      <div class="pregressContent">
        <el-progress :percentage="percent" :format="format"></el-progress>
      </div>
      <span>{{getDurationTime}}</span>
    </div>
    <div class="right">
      <i class="iconfont icon-baocunshunxu"></i>
      <i class="iconfont icon-suiji"></i>
      <i class="iconfont icon-danquxunhuan"></i>
      <i class="iconfont icon-geciweidianji"></i>
      <i class="iconfont icon-gedan1"></i>
    </div>
  </div>
</template>

<script>
import { getLyric } from "../network/detail";
import playerCover from "./playerCover.vue";
import PlayerPure from "./PlayerPure.vue";
import { dateFtt } from "../utils/tools";
export default {
  name: "MusicPlayer",
  props: ["songUrl"],
  components: {
    playerCover,
    PlayerPure,
  },
  data() {
    return {
      currentTime: 0, //当前音乐播放时间
      isPure: false,
      lyric: "",
      duration: 0, //音乐总时间
      isPlay: false, //true正在播放
      percent: 0, //音乐进度百分比
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.getLyrics(this.songUrl.id);
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    togglePlayerPure(state) {
      this.isPure = state;
    },
    getLyrics(id) {
      getLyric(id).then((res) => {
        this.lyric = (res.data.lrc && res.data.lrc.lyric) || "暂无歌词";
        // console.log(this.lyric)
      });
    },
    audioTimeUpdate() {
      this.currentTime = this.$refs.audio.currentTime;
      this.percent = (this.currentTime / this.duration) * 100;
    },
    /**监听音乐加载 */
    playLoad() {
      /**获取歌曲时长 */
      this.duration = this.$refs.audio.duration;
    },
    musicEnded() {
      this.isPlay = false;
    },
    musicPlaying(){
      this.isPlay = true
    },
    toggle() {
      this.isPlay = !this.isPlay;
      if (this.isPlay === true) {
        this.$refs.audio.play();
      } else {
        this.$refs.audio.pause();
      }
    },
    format() {
        return '';
      }
  },
  watch: {
    songUrl() {
      this.getLyrics(this.songUrl.id);
    },
  },
  computed: {
    theme() {
      return this.$store.state.theme;
    },
    playerClass() {
      return ["player", `${this.theme + "-player"}`];
    },
    /**格式化audio currentTime => 'MM:dd' */
    getCurrentTime() {
      /* new Date()传入的是毫秒，而$refs.audio.currentTime返回的是秒*/
      return dateFtt(new Date(this.currentTime * 1000), "mm:ss") || "00:00";
    },
    /**格式化duration => 'mm:dd' */
    getDurationTime() {
      return dateFtt(new Date(this.duration * 1000), "mm:ss") || "00:00";
    },
  },
};
</script>
<style lang="less" scoped>
.light-player {
  background-color: rgb(255, 255, 255);
  color: black;
}
.dark-player {
  background-color: rgb(43, 40, 40);
  color: white;
}
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
    position: relative;
    padding: 0px 20px;
    cursor: pointer;
    i {
      font-size: 30px;
    }
  }
}
.weizhi {
  position: absolute;
  top: 0;
  left: 5px;
}
.progress{
  display: flex;
  width: 66%;
  justify-content: center;
  align-items: center;
  .pregressContent{
    padding-left: 10px;
    width: 90%;
  }
}
</style>