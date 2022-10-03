<template>
  <div class="artistBaseInfo">
    <div class="left">
      <img v-lazy="artist.picUrl" :key="artist.picUrl" alt="" />
    </div>
    <div class="right">
      <h4>
        <el-tag>歌手 </el-tag>
        {{ artist.name }}
      </h4>
      <div class="right-item">
        <p>
          <span>单曲数：</span>
          {{ artist.musicSize }}
        </p>
        <p>
          <span>专辑数：</span>
          {{ artist.albumSize }}
        </p>
        <p class="desc-title">
          <span>简介：</span>
          {{ desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { getArtistDesc } from "../../../network/artist";
export default {
  name: "ArtistBaseinfo",
  props: ["artist", "MvCount"],
  data() {
    return {
      desc: "",
    };
  },
  watch: {
    artist: {
      handler() {
        getArtistDesc(this.artist.id).then((res) => {
          this.desc = res.data.briefDesc;
        });
      },
      immediate: true,
    },
  },
};
</script>

<style lang="less" scoped>
.artistBaseInfo {
  width: 100%;
  padding: 10px 0px;
  display: flex;
  .left {
    width: 200px;
    img {
      width: 100%;
    }
  }
  .right {
    padding-left: 35px;
    flex: 1;
    h4 {
      margin: 0;
      padding: 0;
      font-size: 16px;
    }
    .right-item {
      padding: 10px 0px;
      font-size: 15px;
      p{
        margin: 0;
        padding: 3px 0;
      }
      .desc-title {
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
      }
    }
  }
}
</style>