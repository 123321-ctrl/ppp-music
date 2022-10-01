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
    </el-menu>
    <albumList :artistId="artist.id" v-show="isShow === 'album'"></albumList>
    <mvList v-show="isShow === 'MV'" :mvList="mvList"></mvList>
    <ArtistDescDetail v-show="isShow === 'desc'" :artistId="artist.id" :name="artist.name"></ArtistDescDetail>
  </div>
</template>

<script>
import mvList from '../../components/list/mv-list/mvList.vue'
import albumList from './childComponent/albumList.vue'
import ArtistBaseinfo from "./childComponent/ArtistBaseinfo.vue";
import ArtistDescDetail from './childComponent/ArtistDescDetail.vue'
import {getArtistMv} from '../../network/artist'
export default {
  name: "ArtistDetail",
  components: {
    ArtistBaseinfo,albumList,mvList,ArtistDescDetail
  },
  data() {
    return {
      artist: null,
      mvLIst: [],
      activeIndex: "1",
      isShow:"album",
      mvList: [],
    };
  },
  created() {
    this.artist = this.$route.query.artist;
    // console.log(this.artist)
    this.initRequest();
  },
  methods: {
    handleSelect(key) {
      switch (key) {
        case '1':
          this.isShow = "album";
          break;
        case '2':
          this.isShow = "MV";
          break;
        case '3':
          this.isShow = "desc";
          break;
      }
    },
    initRequest(){
      getArtistMv(this.artist.id).then(res=>{
        this.mvList = res.data.mvs;
        // console.log("111",this.mvList)
      })
    }
  },
  watch: {
    /**路由变化数据置空 */
    $route() {
      if (this.$route.path.indexOf("artist-detail") > 0) {
        this.artist = this.$route.query.artist;
        // console.log("ggg",this.artist)
        // this.reset();
        this.initRequest();
      }
    },
  },
};
</script>

<style scoped>
</style>