<template>
  <div>
    <h4>最新MV</h4>
    <div>
      <span v-for="(item, index) in areas" :key="index" class="items" @click="handleAreasClick1(index)">
        {{ item }}
      </span>
    </div>
    <mvList :mvList="mvList"></mvList>
    <h4>推荐MV</h4>
    <mvList :mvList="perMV"></mvList>
    <h4>排行榜MV</h4>
    <div>
      <span v-for="(item, index) in areas" :key="index" class="items" @click="handleAreasClick2(index)">
        {{ item }}
      </span>
    </div>
    <mvRankList :topMv="topMv"></mvRankList>
  </div>
</template>

<script>
import { getNewMV, Personalized,getTopMv } from "../../network/mv";
import mvList from "../../components/list/mv-list/mvList.vue";
import mvRankList from '../../components/list/mvRankList/mvRankList.vue'
export default {
  name: "MV",
  components: {
    mvList,mvRankList
  },
  data() {
    return {
      areas: ["内地", "港台", "欧美", "日本", "韩国"],
      limit: 12,
      currentArea: "内地",
      mvArea: "内地",
      mvList: [], //最新MV
      perMV: [], //推荐MV
      topMv: [], //排行榜MV
      offset: 1, //MV排行榜分页
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.getNewMVs()
    this.Personalizeds()
    this.getTopMvs()
  },
  methods: {
    handleAreasClick1(index) {
      this.currentArea = this.areas[index]
      this.mvList = []
      this.getNewMVs()
    },
    handleAreasClick2(index) {
      this.mvArea = this.areas[index]
      this.mvList = []
      this.getTopMvs()
    },
    getNewMVs() {
      getNewMV(this.limit, this.currentArea).then((res) => {
        this.mvList = res.data.data
        // console.log(this.mvList)
      });
    },
    Personalizeds() {
      Personalized(10,).then(res => {
        this.perMV = res.data.result
        console.log(this.perMV)
      })
    },
    getTopMvs(){
      getTopMv(10,this.mvArea,this.offset).then(res=>{
        this.topMv = res.data.data
        console.log(this.topMv)
      })
    }
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() { },
};
</script>
<style scoped>
.items {
  display: inline-block;
  width: 50px;
}

.items:hover {
  cursor: pointer;
  color: aqua;
}
</style>