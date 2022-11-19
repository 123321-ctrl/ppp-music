<template>
  <div class="musicListDetail">
    <baseInfo :baseINfo="baseInfo" @playAllMusic="playAllMusic"></baseInfo>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      :background-color="theme === 'light' ? Lmenubgc : Dmenubgc"
    >
      <el-menu-item index="1">歌曲列表</el-menu-item>
      <el-menu-item index="2"
        >评论{{ `${"(" + recommendsCount + ")"}` }}</el-menu-item
      >
      <el-menu-item index="3">收藏者</el-menu-item>
    </el-menu>
    <song-list :musicList="musicList" v-show="isShow == 'music'"></song-list>
    <div class="DetailRecommand" v-show="isShow == 'recommend'">
      <ReCommends ref="recommend" :recommends="recommends"></ReCommends>
      <div class="recommandBottom">
        <el-pagination
          background
          layout="prev, pager, next"
          :current-page.sync="offset"
          :page-size.sync="limit"
          :total="recommendsCount"
          @current-change="onPageChange"
        >
        </el-pagination>
      </div>
    </div>
    <div class="likers">
      <!-- 收藏者 -->
      <MusicListLive v-show="isShow == 'sub'" :subs="subs"></MusicListLive>
    </div>
  </div>
</template>

<script>
import ReCommends from "../../components/content/Recommends/Recommends.vue";
import baseInfo from "./childComponent/baseInfo.vue";
import songList from "../../components/list/songList/songList.vue";
import MusicListLive from "./childComponent/MusicListLive.vue";
import {
  getMusicListDetail,
  getSongsDetail,
  songDetail,
  getSub,
} from "../../network/detail";
import { getRecommends } from "../../network/detail";
export default {
  name: "MusicListDetail",
  components: {
    baseInfo,
    songList,
    ReCommends,
    MusicListLive,
  },
  data() {
    return {
      Lmenubgc: "rgb(245,245,245)",
      Dmenubgc: "rgb(22,22,26)",
      id: null,
      limit: 30,
      offset: 1, //分页
      baseInfo: {},
      activeIndex: "1",
      musicList: [],
      trackIds: [], //歌单里歌曲的id
      recommends: [],
      isShow: "music", //控制显示歌单、评论、收藏者
      subs: null,
      recommendsCount: 0, //歌单评论数
    };
  },
  computed: {
    theme() {
      return this.$store.state.theme;
    },
  },
  created() {
    this.getDetailRequestDate();
  },
  methods: {
    init() {
      this.baseInfo = {};
      this.musicList = [];
    },
    handleSelect(key) {
      switch (key) {
        case "1":
          this.isShow = "music";
          break;
        case "2":
          this.isShow = "recommend";
          break;
        case "3":
          this.isShow = "sub";
      }
    },
    async getDetailRequestDate() {
      this.id = this.$route.params.id; //歌单的id
      this.init();
      const res = await getMusicListDetail(this.id);
      this.baseInfo = res.data.playlist;

      /**获取歌单评论数 */
      this.recommendsCount = res.data.playlist.commentCount;

      /**遍历查询歌单所有歌曲详情，得到歌曲的id */
      this.trackIds = res.data.playlist.trackIds;
      const length = this.trackIds.length;
      for (let i = 0; i < length; i++) {
        getSongsDetail(this.trackIds[i].id).then((res) => {
          let song = new songDetail(res.data.songs);
          this.musicList.push(song);
        });
      }
      /**获取歌单评论 */
      this.getRecommendss();
      // 获取收藏者
      getSub(this.id, this.limit).then((res) => {
        this.subs = res.data.subscribers;
      });
    },
    playAllMusic() {
      console.log("播放全部");
    },
    getRecommendss() {
      getRecommends(this.id, this.limit, this.offset).then((res) => {
        this.recommends = res.data.comments;
      });
    },
    onPageChange() {
      // console.log(this.offset)
      this.getRecommendss();
    },
  },
  watch: {
    /**监听导航变化重新发送请求 */
    $route() {
      if (this.$route.path.indexOf("musiclistdetail") > 0) {
        this.getDetailRequestDate();
      }
    },
  },
};
</script>

<style scoped>
.el-menu--horizontal > .el-menu-item.is-active {
  color: #afc0e1;
}
.recommandBottom {
  text-align: center;
}
</style>