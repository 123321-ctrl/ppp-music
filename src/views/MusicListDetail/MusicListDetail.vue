<template>
  <div class="musicListDetail">
    <baseInfo :baseINfo="baseInfo" @playAllMusic="playAllMusic"></baseInfo>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">歌曲列表</el-menu-item>
      <el-menu-item index="2">评论</el-menu-item>
      <el-menu-item index="3">收藏者</el-menu-item>
    </el-menu>
    <song-list :musicList="musicList"></song-list>
  </div>
</template>

<script>
import baseInfo from "./childComponent/baseInfo.vue";
import songList from "../../components/list/songList/songList.vue";
import { getMusicListDetail, getSongsDetail,songDetail } from "../../network/detail";
export default {
  name: "MusicListDetail",
  components: {
    baseInfo,
    songList,
  },
  data() {
    return {
      id: null,
      baseInfo: {},
      activeIndex: "1",
      musicList: [],
      trackIds:[] //歌单里歌曲的id
    };
  },
  created() {
    this.getDetailRequestDate();
  },
  methods: {
    init() {
      this.baseInfo = {};
      this.musicList = [];
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    async getDetailRequestDate() {
      this.id = this.$route.params.id;  //歌单的id
      this.init();
      const res = await getMusicListDetail(this.id);
      this.baseInfo = res.data.playlist;

      /**遍历查询歌单所有歌曲详情，得到歌曲的id */
      this.trackIds = res.data.playlist.trackIds;
      const length = this.trackIds.length;
      for (let i = 0; i < length; i++) {
        getSongsDetail(this.trackIds[i].id).then((res) => {
          let song = new songDetail(res.data.songs);
          this.musicList.push(song);
        });
      }
    },
    playAllMusic(){
      console.log("播放全部")
    }
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
</style>