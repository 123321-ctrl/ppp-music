<template>
  <div>
    <ArtistBaseinfo :artist="artist"></ArtistBaseinfo>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">专辑</el-menu-item>
      <el-menu-item index="2">MV</el-menu-item>
      <el-menu-item index="3">歌手详情</el-menu-item>
      <el-menu-item index="4">相似歌手</el-menu-item>
    </el-menu>
    <albumList :artistId="artist.id"></albumList>
  </div>
</template>

<script>
import albumList from './childComponent/albumList.vue'
import ArtistBaseinfo from "./childComponent/ArtistBaseinfo.vue";
export default {
  name: "ArtistDetail",
  components: {
    ArtistBaseinfo,albumList
  },
  data() {
    return {
      artist: null,
      mvLIst: [],
      activeIndex: "1",
    };
  },
  created() {
    this.artist = this.$route.query.artist;
    // console.log(this.artist)
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  watch: {
    /**路由变化数据置空 */
    $route() {
      if (this.$route.path.indexOf("artist-detail") > 0) {
        this.artist = this.$route.query.artist;
        // this.reset();
        // this.initRequest();
      }
    },
  },
};
</script>

<style scoped>
</style>