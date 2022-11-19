<template>
  <div :class="articleClass">
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div
      v-loading="isLoading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    >
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
  computed: {
    theme() {
      return this.$store.state.theme;
    },
    articleClass() {
      return ["article", `${this.theme + "-article"}`];
    },
    isLoading() {
      return this.$store.state.isloading;
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style lang="less" scoped>
@import "../utils/theme.less";
.light-article {
  background-color: @LightMain;
  color: @lightFontColor;
}
.dark-article {
  background-color: @DarkMain;
  color: @darkFontColor;
}
.article {
  width: 82%;
  height: calc(100% - 58px - 60px);
  float: right;
  overflow-y: auto;
  @media screen and (max-width: 568px) {
    width: 86.5%;
  }
}
.content {
  width: 85%;
  margin: 5px auto;
}
</style>