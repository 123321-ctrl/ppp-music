<template>
  <div class="songList">
    <div v-for="(item, index) in songList" :key="index" class="songListItem">
      <span>{{ index + 1 }}</span>
      <div class="title">
        <img :src="item.picUrl" alt="" />
        <div class="icon">
          <i class="iconfont icon-24gf-playCircle"></i>
        </div>
      </div>
      <div class="mass">
        <p>{{ item.name }}</p>
        <p class="company">{{ item.song.album.company }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newSongs",
  props: ["songList"],
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
.songList {
  width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  border-top: 2px solid rgb(63, 62, 62);
  padding-top: 10px;
  .songListItem {
    position: relative;
    width: 48%;
    height: 70px;
    margin-bottom: 10px;
    span {
      position: absolute;
      top: 25px;
      left: 0;
    }
    .title {
      position: relative;
      left: 20px;
      height: 100%;
      img {
        height: 100%;
      }
      .icon {
        position: absolute;
        top: 33%;
        left: 20px;
        i {
          color: #fff;
          font-size: 28px;
        }
      }
    }
    .mass {
      position: absolute;
      left: 96px;
      top: -12px;
      p{
        font-size: 14px;
      }
    }
  }
}
</style>