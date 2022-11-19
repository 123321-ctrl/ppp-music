<template>
  <div class="songlist" ref="songlist">
    <el-table
      :data="musicList"
      stripe
      style="width: 100%"
      highlight-current-row
      @current-change="handleCurrentChange"
      :row-class-name="rowClassName"
      @row-click="rowClick"
    >
      <el-table-column type="index" width="50"> </el-table-column>

      <el-table-column prop="pic" label="操作" width="100">
        <template slot-scope="scope">
          <img
            v-imglazy="scope.row.pic"
            :key="scope.row.pic"
            alt=""
            style="width: 80px; height: 80px"
            v-if="newsongs"
          />
          <i v-if="!newsongs" class="iconfont icon-xihuan"></i>
        </template>
      </el-table-column>

      <el-table-column prop="name" label="音乐标题" width="200">
      </el-table-column>

      <el-table-column prop="artist" label="歌手"> </el-table-column>

      <el-table-column prop="album" label="专辑"> </el-table-column>

      <el-table-column prop="time" label="时长"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getMusicUrl, Song } from "../../../network/detail";
export default {
  name: "songList",
  props: ["musicList", "newsongs"],
  data() {
    return {
      currentRow: null,
      songUrl: null,
      boxWidth:0
    };
  },
  watch:{
    musicList(){
      this.$store.state.musicList = this.musicList
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.currentRow = val;
      getMusicUrl(val.id).then((res) => {
        const songData = res.data.data[0].url;
        let song = new Song(songData, val);
        this.songUrl = song;
        this.$store.commit("getsongUrl", this.songUrl);
      });
    },
    rowClassName({row,rowIndex}){
      row.index = rowIndex
    },
    rowClick(row){
      this.$store.state.currentIndex = row.index
    }
  },
};
</script>

<style scoped>
.songlist {
  width: 100%;
  cursor: pointer;
  margin-top: 10px;
  border-top: 1px solid black;
}
</style>