<template>
  <div class="individuation">
    <div class="individuationMain">
        <imgSwiper :banner="banner"></imgSwiper>
        <h4>推荐歌单</h4>
        <MusicList :personalized="personalized"></MusicList>
        <h4>独家放送</h4>
        <PrivateContent :privatecon="privatecontent"></PrivateContent>
        <h4>最新音乐</h4>
        <newSongs :songList="songList"></newSongs>
    </div>
  </div>
</template>

<script>
import imgSwiper from '../../components/content/swiper/Swiper.vue' 
import MusicList from '../../components/list/musiclist/MusicList.vue'
import PrivateContent from '../../components/list/privatecontent/PrivateContent.vue'
import newSongs from '../../components/list/newsongs/newSongs.vue'
import {getBanner,getPersonalized,getPrivateContent,getNewSongs} from '../../network/discover'
export default {
  name: "musicIndividuation",
  components:{
    imgSwiper,MusicList,PrivateContent,newSongs
  },
  data() {
    return {
      banner:[],
      limit:10,
      personalized:[],
      privatecontent:[],
      songList:[]
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    getBanner().then(res =>{
      this.banner = res.data.banners
    })
    getPersonalized(this.limit).then(res=>{
      this.personalized = res.data.result
    })
    getPrivateContent().then(res =>{
      this.privatecontent = res.data.result
    })
    getNewSongs().then(res=>{
      this.songList = res.data.result
    })
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
/* .individuationMain{
    width: 80%;
    margin: 5px auto;
} */
</style>