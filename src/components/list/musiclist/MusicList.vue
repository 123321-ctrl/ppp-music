<template>
  <div class="musiclist-playlist">
    <div
      v-for="(item, index) in personalized"
      :key="index"
      class="musiclist-item"
      @mouseenter="handleEnter(index)"
      @mouseleave="handleLeave()"
      @click="enterMusicListDetail(index)"
    >
      <div class="imgAndplay">
        <img v-lazy="item.picUrl || item.coverImgUrl" :key="item.picUrl || item.coverImgUrl" alt="" />
        <transition
          name="play"
          enter-active-class="animate__animated animate__fadeInLeft"
          leave-active-class="animate__animated animate__fadeOutLeft"
          :duration="{ enter: 400, leave: 400 }"
        >
          <div class="play" v-show="currentIndex === index">
            <i class="iconfont icon-24gf-playCircle"></i>
          </div>
        </transition>
      </div>

      <p>{{ item.name }}</p>

      <transition
        name="playlist-slide"
        enter-active-class="animate__animated animate__slideInDown"
        leave-active-class="animate__animated animate__slideOutUp"
        :duration="{ enter: 400, leave: 400 }"
      >
        <div class="count" v-show="currentIndex !== index">
          >
          <div class="count" v-show="currentIndex !== index">
            <i class="iconfont icon-erji"></i>
            {{ item.playCount }}
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicList",
  props: ["personalized"],
  data() {
    return {
      currentIndex: null,
    };
  },
  methods: {
    handleEnter(index) {
      this.currentIndex = index;
    },
    handleLeave() {
      this.currentIndex = null;
    },
    enterMusicListDetail(index) {
      this.$router.push(
        "/musiclistdetail/" +
          this.personalized[index].id +
          "/" +
          new Date().getTime()
      );
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style lang="less" scoped>
.musiclist-playlist {
  width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  // background-color: red;
  box-sizing: border-box;
  padding: 5px;

  .musiclist-item {
    position: relative;
    width: 18%;
    margin-bottom: 10px;
    cursor: pointer;
    // background-color: pink;
    .imgAndplay {
      position: relative;
      img {
        width: 100%;
        border-radius: 5px;
      }
      .play {
        position: absolute;
        bottom: 5px;
        left: 5px;
        i {
          font-size: 34px;
        }
      }
    }

    p {
      margin: 0;
      font-size: 15px;
    }
    .count {
      width: 100%;
      text-align: right;
      position: absolute;
      top: 2px;
      right: 0;
      font-size: 13px;
      color: #f6f6f6;
      background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.4)
      );
    }
  }
}
</style>