<template>
  <div class="artistList">
    <div class="Box">
      <h4>语种：</h4>
      <div class="content">
        <span
          v-for="(item, index) in areas"
          :key="index"
          class="category"
          @click="handleAreasClick(index)"
        >
          {{ item.content }}
        </span>
      </div>
    </div>
    <div class="Box">
      <h4>分类：</h4>
      <div class="content">
        <span
          v-for="(item, index) in types"
          :key="index"
          class="category"
          @click="handleTypesClick(index)"
        >
          {{ item.content }}
        </span>
      </div>
    </div>
    <div class="FnamesBox">
      <h4>筛选：</h4>
      <div class="Fnamescontent">
        <span
          v-for="(item, index) in Fnames"
          :key="index"
          class="fnames"
          @click="handleNamesClick(index)"
        >
          {{ item.content }}
        </span>
      </div>
    </div>
    <div>
      <artistsLists :artistlist="artistlist"></artistsLists>
    </div>
    <div class="artist-category-page">
      <el-pagination
        background
        :current-page.sync="offset"
        :page-count="50"
        @current-change="onPageChange"
      />
    </div>
  </div>
</template>

<script>
import { areas, types, Fnames } from "./data.js";
import artistsLists from "../../components/list/artistLists/artistsLists.vue";
import { getArtist } from "../../network/discover";
export default {
  name: "ArtistList",
  components: {
    artistsLists,
  },
  data() {
    return {
      areas,
      types,
      Fnames,
      currentArea: -1,
      currentType: -1,
      currentName: -1,
      limit: 30,
      offset: 1,
      artistlist: [],
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.getArtists();
  },
  methods: {
    onPageChange(){
      this.getArtists();
    },
    handleAreasClick(index) {
      this.currentArea = this.areas[index].value;
      // console.log(this.currentArea)
      this.artistlist = [];
      this.getArtists();
    },
    handleTypesClick(index) {
      this.currentType = this.types[index].value;
      this.artistlist = [];
      this.getArtists();
    },
    handleNamesClick(index) {
      this.currentName = this.Fnames[index].value;
      this.artistlist = [];
      this.getArtists();
    },
    async getArtists() {
      const res = await getArtist(
        this.currentArea,
        this.currentType,
        this.currentName,
        this.limit,
        this.offset
      );
      this.artistlist = res.data.artists;
      // console.log(this.artistlist)
    },
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style lang="less" scoped>
.Box {
  display: flex;
  height: 60px;
  font-size: 15px;
  .content {
    display: flex;
    padding-left: 35px;
    // height: 80px;
    line-height: 63px;
    .category {
      cursor: pointer;
      width: 80px;
    }
    .category:hover {
      color: rgb(148, 37, 37);
    }
  }
}
.FnamesBox {
  position: relative;
  display: flex;
  height: 80px;
  flex-wrap: wrap;
  .Fnamescontent {
    // line-height: 65px;
    position: absolute;
    top: 8px;
    left: 72px;
    .fnames {
      display: inline-block;
      cursor: pointer;
      width: 40px;
      font-size: 14px;
      line-height: 30px;
    }
    .fnames:hover {
      color: rgb(148, 37, 37);
    }
  }
}
</style>