<template>
  <div>
    <div>
      <span>{{ keywords }}</span>
      共找到
      <!-- <span class="count">{{ count }}</span -->
      >个
      <span class="count">{{ searchType }}</span>
    </div>
    <div class="search-detail-container">
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchDetail",
  data() {
    return {
      keywords: "",
      count: 0,
      searchType: "单曲", //搜索类型
    };
  },
  watch: {
    $route: {
      handler() {
        if (this.$route.path.indexOf("/search-detail") >= 0) {
          this.keywords = this.$route.params.keywords;
        }
      },
      immediate: true,
    },
  },
};
</script>

<style scoped>
</style>