<template>
  <div class="rankList">
    <h4>官方榜</h4>
    <div class="items">
      <rankListItem
        v-for="(item, index) in rankList"
        :key="index"
        :rank-id="item.id"
        :title="item.name"
        :bg-color="bgColor[index]"
        @handleRankList="handleRankList"
      ></rankListItem>
    </div>
  </div>
</template>

<script>
import { getRankList } from "../../network/discover";
import rankListItem from "./rank-list-item.vue";
export default {
  name: "RankList",
  components: {
    rankListItem
  },
  data() {
    return {
      rankList: [],
      bgColor: [
        { bg1: "#56a1e3", bg2: "#5a8beb" },
        { bg1: "#34aabe", bg2: "#56c2cd" },
        { bg1: "#d53d6a", bg2: "#eb638d" },
        { bg1: "#c7523c", bg2: "#cc7455" },
        { bg1: "#56a1e3", bg2: "#5a8beb" },
        { bg1: "#34aabe", bg2: "#56c2cd" },
        { bg1: "#d53d6a", bg2: "#eb638d" },
        { bg1: "#c7523c", bg2: "#cc7455" },
      ],
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    getRankList().then((res) => {
      this.rankList = res.data.list.slice(0, 8);
      console.log(this.rankList);
    });
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    handleRankList(id) {
      this.$router.push("/musiclistdetail/" + id + "/" + new Date().getTime());
    },
  },
};
</script>
<style scoped>
.items {
  display: flex;
  flex-wrap: wrap;
}
</style>