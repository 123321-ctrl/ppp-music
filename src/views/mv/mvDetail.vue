<template>
  <div class="mvdetail">
    <div class="layout-left">
      <div class="title">
        <el-tag>MV</el-tag>
        <span class="name">{{ detail.name }}</span>
        <span>{{ detail.artistName }}</span>
      </div>
      <div class="video">
        <video
          :src="url"
          controls
          autoplay
          width="100%"
          class="video-play"
        ></video>
      </div>
      <div class="recommend">
        <p>评论</p>
        <ReCommends :recommends="recommends"></ReCommends>
      </div>
    </div>
    <div class="layout-right">
      <div class="desc">
        <p>MV介绍</p>
        <div class="base">
          <div class="date">发布时间：{{ detail.publishTime }}</div>
          <div class="playCount">播放次数：{{ detail.playCount }}次</div>
        </div>
        <div class="mv-desc">
          <span>简介：</span>
          {{ detail.desc }}
        </div>
      </div>
      <div class="related-sugg">
        <p>相关推荐</p>
        <relatedSug :relatedMvs="relatedMvs"></relatedSug>
      </div>
    </div>
  </div>
</template>

<script>
import relatedSug from './relatedSug.vue'
import ReCommends from "../../components/content/Recommends/Recommends.vue";
import { getMvDetail, getMVUrl, getMVComment,getSimiMv } from "../../network/mv";
export default {
  name: "mvDetail",
  components: {
    ReCommends,relatedSug
  },
  data() {
    return {
      id: null,
      detail: null,
      url: null,
      recommends: null,
      limit: 20,
      relatedMvs:[]
    };
  },
  created() {
    this.id = this.$route.params.id;
    if (this.id != null) {
      this.initRequest();
    }
  },
  methods: {
    initRequest() {
      getMvDetail(this.id).then((res) => {
        this.detail = res.data.data;
      });
      getMVUrl(this.id).then((res) => {
        this.url = res.data.data.url;
      });
      getMVComment(this.id, this.limit).then((res) => {
        this.recommends = res.data.comments;
      });
      getSimiMv(this.id).then(res=>{
        this.relatedMvs = res.data.mvs;
      })
    },
  },
  watch: {
    $route() {
      this.id = this.$route.params.id;
      if (this.id != null) {
        this.initRequest();
      }
    },
  },
};
</script>

<style lang="less" scoped>
.mvdetail {
  margin-top: 10px;
  width: 100%;
  display: flex;
  .layout-left {
    width: 70%;
    .title {
      margin-bottom: 10px;
      .name {
        margin: 0 5px;
      }
    }
  }
  .layout-right{
    padding-left: 10px;
    flex: 1;
    .desc{
        margin-top: -15px;
        .base{
            font-size: 13px;
            margin-bottom: 5px;
            display: flex;
            .date{
                flex: 1;
            }
        }
        .mv-desc{
            font-size: 15px;
            height: 277px;
            overflow: auto;
        }
    }
  }
}
</style>>