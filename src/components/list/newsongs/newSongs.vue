<template>
  <div class="songList">
    <div
      v-for="(item, index) in songList"
      :key="index"
      class="songListItem"
      @click="playmusic(item)"
    >
      <span>{{ index + 1 }}</span>
      <div class="title">
        <img v-imglazy="item.picUrl" :key="item.picUrl" alt="" />
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
import { getMusicUrl, Song } from "../../../network/detail";
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
  methods: {
    playmusic(item) {
      getMusicUrl(item.id).then((res) => {
        const songData = res.data.data[0].url;
        let song = new Song(songData, item);
        // let song = {
        //   url:songData,
        //   id:item.id,
        //   name:item.name,
        //   album:item.song.album.name,
        //   artist:item.song.artists[0].name,
        //   pic:item.picUrl,
        //   time:item.song.duration
        // }
        console.log(song);
        this.songUrl = song;
        this.$store.commit("getsongUrl", this.songUrl);
      });
    },
  },
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
      p {
        font-size: 14px;
      }
    }
  }
}
</style>