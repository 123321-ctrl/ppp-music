<template>
  <div class="search">
    <input v-model="searchWord" placeholder="请输入内容" />
    <span class="iconfont icon-sousuo"></span>
  </div>
</template>

<script>
export default {
  name: "mySearch",
  data() {
    return {
      searchWord: "",
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
.search {
    position: relative;
}
input {
  width: 111%;
  height: 50%;
}
span {
    position: absolute;
    top: 2px;
    right: -17px;
    font-size: 20px;
}
</style>