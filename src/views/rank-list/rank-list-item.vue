<template>
  <div class="item" @click="handleRankList">
    <div
      class="itemTop"
      :style="{
        background:
          'linear-gradient(to right,' + bgColor.bg1 + ',' + bgColor.bg2 + ')',
      }"
    >
      <div class="title">{{ title }}</div>
    </div>
    <!-- list -->
  </div>
</template>

<script>
export default {
  name: "rankListItem",
  props: ["rankId", "title", "bgColor"],
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods:{
    handleRankList(){
      this.$emit("handleRankList",this.rankId)
    }
  }
};
</script>
<style lang="less" scoped>
.item {
  cursor: pointer;
  width: 30%;
  height: 150px;
  margin-right: 25px;
}
.itemTop {
  width: 100%;
  height: 100px;
  line-height: 100px;
  .title {
    font-size: 32px;
    text-align: center;
  }
}
</style>