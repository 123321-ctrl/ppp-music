<template>
  <div class="songlist">
    <el-table
      :data="musicList"
      stripe
      style="width: 100%"
      highlight-current-row
      @current-change="handleCurrentChange"
    >
      <el-table-column type="index" width="50"> </el-table-column>

      <el-table-column prop="pic" label="操作" width="100">
        <template slot-scope="scope">
          <img
            :src="scope.row.pic"
            alt=""
            style="width: 80px; height: 80px"
            v-if="newsongs"
          />
        <i v-if="!newsongs" class="iconfont icon-xihuan"></i>
        </template>
      </el-table-column>

      <el-table-column prop="name" label="音乐标题" width="200">
        <!-- <template slot-scope="scope">
          <span v-if="newsongs">{{ scope.row.album.name }}</span>
          <span v-if="!newsongs">{{ scope.row.name }}</span>
        </template> -->
      </el-table-column>

      <el-table-column prop="artist" label="歌手"> </el-table-column>

      <el-table-column prop="album" label="专辑"> </el-table-column>

      <el-table-column prop="time" label="时长"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {getMusicUrl,Song} from '../../../network/detail'
export default {
  name: "songList",
  props: ["musicList", "newsongs"],
  data() {
    return {
      currentRow: null,
      songUrl:null
    };
  },
  created(){
    // console.log("music",this.musicList,this.newsongs)
  },
  methods: {
    handleCurrentChange(val) {
      this.currentRow = val;
      getMusicUrl(val.id).then((res)=>{
        const songData = res.data.data[0].url
        let song = new Song(songData,val)
        this.songUrl = song
          this.$store.commit('getsongUrl',this.songUrl)      
      })
    },
  },  
  // created() {
  //   console.log(this.musicList);
  // },
};
</script>

<style scoped>
.songlist {
  cursor: pointer;
  margin-top: 10px;
  border-top: 1px solid black;
}
</style>