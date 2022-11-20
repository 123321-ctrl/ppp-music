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
        <i class="iconfont icon-previous" @click="preMusic"></i>
      </div>
      <div class="player-toggle-item" @click="toggle">
        <i class="iconfont icon-bofang1 weizhi" v-show="!isPlay"></i>
        <i class="iconfont icon-zanting weizhi" v-show="isPlay"></i>
      </div>
      <div class="player-toggle-item">
        <i class="iconfont icon-next" @click="nextMusic"></i>
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
        <playerProgress
          :percentage="percent"
          @changePercent="changePercent($event)"
        ></playerProgress>
      </div>
      <span>{{ getDurationTime }}</span>
      <!-- <span>{{ getCurrentTime }}</span>
      <div class="pregressContent">
        <el-progress :percentage="percent" :format="format"></el-progress>
      </div>
      <span>{{ getDurationTime }}</span> -->
    </div>
    <div class="right">
      <i class="iconfont icon-baocunshunxu" @click="shunxu"></i>
      <i class="iconfont icon-suiji" @click="suiji"></i>
      <i class="iconfont icon-danquxunhuan" @click="danquxunhuan"></i>
      <i class="iconfont icon-geciweidianji"></i>
      <i class="iconfont icon-gedan1"></i>
    </div>
  </div>
</template>

<script>
import { getLyric } from "../network/detail";
import playerCover from "./playerCover.vue";
import PlayerPure from "./PlayerPure.vue";
import playerProgress from "../components/content/playerProgress/playerProgress.vue";
import { dateFtt } from "../utils/tools";
export default {
  name: "MusicPlayer",
  props: ["songUrl"],
  components: {
    playerCover,
    PlayerPure,
    playerProgress,
  },
  data() {
    return {
      currentTime: 0, //当前音乐播放时间
      isPure: false,
      lyric: "",
      duration: 0, //音乐总时间
      isPlay: false, //true正在播放
      percent: 0, //音乐进度百分比
      schemaIndex: 0, //音乐播放方式--0:顺序、1：随机、2：单曲
      currentIndex: 0,
    };
  },
  computed: {
    theme() {
      return this.$store.state.theme;
    },
    playerClass() {
      return ["player", `${this.theme + "-player"}`];
    },
    getCurrentTime() {
      return dateFtt(new Date(this.currentTime * 1000), "mm:ss") || "00:00";
    },
    getDurationTime() {
      return dateFtt(new Date(this.duration * 1000), "mm:ss") || "00:00";
    },
    playList() {
      return this.$store.state.musicList;
    },
    tableIndex() {
      //如果没有点击表格，state的值为null，否者为索引值
      const storeIndex = this.$store.state.currentIndex;
      const cindex = storeIndex ? storeIndex : 0;
      return cindex;
    },
    // percent: {
    //   get() {
    //     return (this.currentTime / this.duration) * 100;
    //   },
    //   set(newVal) {
    //     this.currentTime = (newVal * this.duration) / 100;
    //   },
    // },
  },
  watch: {
    tableIndex(newVal) {
      this.currentIndex = newVal;
    },
    songUrl() {
      this.getLyrics(this.songUrl.id);
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.getLyrics(this.songUrl.id);
  },
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
    changePercent(e) {
      // this.percent = e;
      this.$refs.audio.currentTime = (e * this.duration) / 100;
    },
    /**监听音乐加载 */
    playLoad() {
      /**获取歌曲时长 */
      this.duration = this.$refs.audio.duration;
    },
    //监听音乐播放结束，并判断播放方式
    musicEnded() {
      this.isPlay = false;
      switch (this.schemaIndex) {
        case 0:
          this.currentIndex++;
          break;
        case 1:
          this.currentIndex = Math.floor(Math.random() * this.playList.length);
          break;
        case 2:
          break;
      }
      this.handlePlay();
    },
    musicPlaying() {
      this.isPlay = true;
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
      return "";
    },
    preMusic() {
      if (this.currentIndex < 0) {
        this.currentIndex = this.playList.length - 1;
      } else {
        this.currentIndex--;
      }
      this.handlePlay();
    },
    nextMusic() {
      if (this.currentIndex >= this.playList.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }
      this.handlePlay();
    },
    handlePlay() {
      this.$store.dispatch("handlePlay", {
        index: this.currentIndex,
      });
    },
    suiji() {
      this.schemaIndex = 1;
      this.currentIndex = Math.floor(Math.random() * this.playList.length);
      this.handlePlay();
    },
    shunxu() {
      this.schemaIndex = 0;
      this.currentIndex >= this.playList.length - 1 ? 0 : this.currentIndex++;
      this.handlePlay();
    },
    danquxunhuan() {
      this.schemaIndex = 2;
      this.handlePlay();
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
    width: 33%;
    flex: 1;
    position: relative;
    // padding: 0px 20px;
    cursor: pointer;
    i {
      font-size: 30px;
    }
  }
}
.weizhi {
  position: absolute;
  top: 0;
  left: 0.05rem;
}
.progress {
  display: flex;
  width: 66%;
  justify-content: center;
  align-items: center;
  .pregressContent {
    padding-left: 10px;
    width: 90%;
  }
}
.right {
  width: 17%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  i {
    font-size: 20px;
  }
}
</style>