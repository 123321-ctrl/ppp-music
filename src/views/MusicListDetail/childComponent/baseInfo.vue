<template>
  <div class="baseinfo">
    <div class="left">
      <img v-lazy="baseINfo.coverImgUrl" :key="baseINfo.coverImgUrl" alt="" />
    </div>
    <div class="right">
      <h4>
        <el-tag>歌单 </el-tag>
        {{ baseINfo.name }}
      </h4>
      <div class="right-item">
        <el-avatar
          :size="30"
          :src="baseINfo.creator.avatarUrl || circleUrl"
        ></el-avatar>
        <span class="creator-name">{{ baseINfo.creator.nickname }}</span>
        <span>创建时间：{{ getCreateDate }}</span>
      </div>
      <div class="right-item">
        <el-button type="primary" @click="handlePlayMusic">
          <i class="iconfont icon-bofang"></i>
          播放全部</el-button
        >
        <el-button>
          <i class="iconfont icon-shoucang"></i>
          收藏</el-button
        >
        <el-button>
          <i class="iconfont icon-fenxiang"></i>
          分享</el-button
        >
      </div>
      <div class="desc">
        <p>
          标签：
          <span>{{ getTags }}</span>
        </p>
        <p class="desc-title">简介：{{ baseINfo.description }}</p>
      </div>
    </div>
    <div class="play">
      <div class="play-left">
        歌曲数
        <br />
        {{ baseINfo.trackCount }}
      </div>
      <div class="play-right">
        播放数
        <br />
        {{ getPlayCount }}
      </div>
    </div>
  </div>
</template>

<script>
import { dateFtt } from "../../../utils/tools";
export default {
  name: "baseInfo",
  props: ["baseINfo"],
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    };
  },
  computed: {
    getCreateDate() {
      return dateFtt(new Date(this.baseINfo.createTime), "yyyy-MM-dd");
    },
    getTags() {
      return this.baseINfo.tags && this.baseINfo.tags.join("/");
    },
    getPlayCount() {
      return (
        this.baseINfo.playCount &&
        this.baseINfo.playCount.toString().slice(0, 2) + "万"
      );
    },
  },
  methods: {
    handlePlayMusic() {
      this.$emit("playAllMusic");
    },
  },
};
</script>

<style lang="less" scoped>
.baseinfo {
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
    flex: 1; //重点要加
    h4 {
      margin: 0;
      padding: 0;
      font-size: 16px;
    }
    .right-item {
      display: flex;
      align-items: center;
      font-size: 14px;
      margin-bottom: 5px;
      span {
        margin-left: 10px;
      }
    }
    .desc {
      font-size: 13px;
    }
    .desc-title {
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }
  .play {
    display: flex;
    font-size: 13px;
    height: 50px;
    .play-left {
      padding: 5px;
      border-right: 1px solid black;
    }
    .play-right {
      padding: 5px;
    }
  }
}
</style>