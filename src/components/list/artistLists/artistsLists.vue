<template>
  <div class="artistlist">
    <div
      v-for="(item, index) in artistlist"
      :key="index"
      class="artistlist-item"
      @mouseenter="handleEnter(index)"
      @mouseleave="handleLeave()"
      @click="enterArtistDetail(item)"
    >
      <div class="imgAndplay">
        <img v-lazy="item.picUrl || item.coverImgUrl" :key="item.picUrl || item.coverImgUrl" alt="" />
        <transition
          name="play"
          enter-active-class="animate__animated animate__fadeInLeft"
          leave-active-class="animate__animated animate__fadeOutLeft"
          :duration="{enter:400,leave:400}"
        >
          <div class="play" v-show="currentIndex === index">
            <i class="iconfont icon-24gf-playCircle"></i>
          </div>
        </transition>
      </div>
      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "artistsLists",
  props:['artistlist'],
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
    enterArtistDetail(item){
      // console.log(item)
      this.$router.push({
        path: "/artist-detail",
        query: {
          artist: item,
        },
      });
    }
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
  },
};
</script>
<style lang="less" scoped>
.artistlist {
  width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  // background-color: red;
  box-sizing: border-box;
  padding: 5px;

  .artistlist-item {
    position: relative;
    width: 18%;
    margin-bottom: 10px;
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
    }
  }
}
</style>