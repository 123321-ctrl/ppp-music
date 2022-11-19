<template>
  <div :class="playerPureClass">
    <div class="playerPureCenter">
      <div class="zuixiaohua">
        <i class="iconfont icon-suoxiao" @click="togglePlayerPure"></i>
      </div>

      <div :class="['Top', `${theme + '-top'}`]">
        <div class="left">
          <div class="player-record-bar">
            <img src="../assets/player/play-bar.png" alt="" />
          </div>
          <div :class="['player-pure-pic',`${'player-pure-pic-'+theme}`]">
            <img v-imglazy="songUrl.pic" :key="songUrl.pic" alt="" />
          </div>
        </div>
        <div class="right">
          <div class="desc">
            <div class="song-title">{{ songUrl.name }}</div>
            <div class="song-artist">{{ songUrl.artist }}</div>
          </div>
          <playerLyric
            :lyric="lyric"
            middle
            :currentTime="currentTime"
          ></playerLyric>
        </div>
      </div>
      <div class="bottom">
        <ReCommends :recommends="recommends"></ReCommends>
      </div>
    </div>
  </div>
</template>

<script>
import { musicRecommend } from "../network/detail";
import playerLyric from "./playerLyric.vue";
import ReCommends from "../components/content/Recommends/Recommends.vue";
export default {
  name: "PlayerPure",
  props: ["songUrl", "lyric", "currentTime"],
  components: {
    playerLyric,
    ReCommends,
  },
  data() {
    return {
      recommends: null,
      limit: 30,
      offset: 1,
    };
  },
  watch: {
    songUrl: {
      immediate: true,
      handler(newsongUrl) {
        this.getRecom(newsongUrl.id);
      },
    },
  },
  methods: {
    togglePlayerPure() {
      this.$emit("togglePlayerPure", false);
    },
    /**获取歌曲评论 */
    async getRecom(id) {
      await musicRecommend(id, this.limit, this.offset).then((res) => {
        this.recommends = res.data.comments;
      });
    },
  },
  computed: {
    theme() {
      return this.$store.state.theme;
    },
    playerPureClass() {
      return ["playerPure", `${this.theme + "-playerPure"}`];
    },
  },
};
</script>

<style lang="less" scoped>
.light-playerPure {
  background-color: rgb(255, 255, 255);
  color: black;
}
.dark-playerPure {
  background-color: rgb(43, 40, 40);
  color: white;
}
.playerPure {
  width: 100%;
  height: calc(100vh - 58px - 60px);
  overflow-y: auto;
  position: absolute;
  z-index: 2;
  left: 0px;
  bottom: 60px;
  .playerPureCenter {
    position: relative;
    height: 100%;
    margin: 0 18%;
  }
}
.zuixiaohua {
  position: absolute;
  width: 40px;
  height: 40px;
  right: -43px;
  line-height: 40px;
  text-align: center;
  background-color: rgb(255, 184, 0);
  i {
    font-size: 30px;
  }
}
.light-top {
  background: radial-gradient(closest-side, #928e8d, #fff);
}
.dark-top {
  background: radial-gradient(closest-side, #3c3532, #16181c);
}
.Top {
  height: 400px;
  display: flex;
  //   background-color: rgba(153, 149, 148, 0.315);
  .left {
    flex: 1;
    position: relative;
    .player-pure-pic {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border: 40px solid #0e0e11;
      margin: auto;
      overflow: hidden;
      animation: rotate 20s linear infinite;
      position: absolute;
      top: 100px;
      left: 36px;
      right: 0px;
      img {
        width: 100%;
      }
    }
    .player-pure-pic-light{
        box-shadow: 0 0 10px #918a85;
    }
    .player-pure-pic-dark{
        box-shadow: 0 0 10px #f9f9f9;
    }

    .player-record-bar {
      width: 80px;
      position: absolute;
      z-index: 2;
      left: 49%;
      top: 17px;
      img {
        width: 100%;
      }
    }
  }
  .right {
    width: 40%;
    padding: 0px 20px;
    .song-title {
      font-size: 20px;
    }
    .song-artist {
      font-size: 13px;
      padding: 3px 0px;
    }
    @media screen and (max-width: 568px) {
        display: none;
    }
  }
}
.bottom {
  margin-top: 10px;
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(1turn);
  }
}
</style>