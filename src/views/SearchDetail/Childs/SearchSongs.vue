<template>
  <div class="search-songs">
    <template>
      <songList :musicList="musicList"></songList>
    </template>
  </div>
</template>

<script>
import songList from "../../../components/list/songList/songList.vue";
import { Search } from "../../../network/search";
// import { Searchsong } from "../../../network/detail";
export default {
  name: "SearchSongs",
  components: {
    songList,
  },
  data() {
    return {
      searchType: 1,
      songCount: 0,
      musicList: [],
      keywords: "",
    };
  },
  watch: {
    $route: {
      handler() {
        if (this.$route.path.indexOf("/search-detail") >= 0) {
          this.keywords = this.$route.params.keywords;
        }
      },
      immediate: true,
    },
  },
  created() {
    this.Searchs();
  },
  methods: {
    /**获取搜索单曲 */
    Searchs() {
      this.musicList = [];
      Search(this.keywords, this.searchType).then((res) => {
        console.log(res.data);
        // let list = res.data.result.songs;

        // for (let i in list) {
        //   let song = new Searchsong(list[i]);
        //   this.musicList.push(song);
        // }
      });
    },
  },
};
</script>

<style>
</style>