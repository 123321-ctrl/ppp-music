<template>
  <div class="article">
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

    <!-- loading动效 -->
  </div>
</template>

<script>
export default {
  name: "LayoutArticle",
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
.article {
  width: 82%;
  height: calc(100% - 58px - 60px);
  float: right;
  overflow-y: auto;
}
.content {
  width: 85%;
  margin: 5px auto;
}
</style>