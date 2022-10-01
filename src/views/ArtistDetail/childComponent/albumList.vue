<template>
  <div>
    <h4>热门50首</h4>
    <song-list :musicList="musicList"></song-list>
  </div>
</template>

<script>
import songList from "../../../components/list/songList/songList.vue";
import { getArtistHot50 } from "../../../network/artist";
import { getSongsDetail,songDetail } from "../../../network/detail";
export default {
  name: "albumList",
  props: ["artistId"],
  components:{
    songList
  },
  data() {
    return {
      albumList: [],
      musicList:[]
    };
  },
  methods: {
    getArtistHot50s(artistId) {
      getArtistHot50(artistId).then((res) => {
        this.albumList = res.data.songs;
        // console.log(this.albumList);
        const length = this.albumList.length;
        for (let i = 0; i < length; i++) {
          getSongsDetail(this.albumList[i].id).then((res) => {
            let song = new songDetail(res.data.songs);
            this.musicList.push(song);
          });
        }
      });
    },
  },
  watch: {
    artistId: {
      handler(newArtistId) {
        this.musicList=[]
        this.getArtistHot50s(newArtistId);
      },
      immediate: true,
    },
  },
};
</script>

<style scoped>
</style>