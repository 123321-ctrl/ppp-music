<template>
  <div id="app">
    <LayoutHeader></LayoutHeader>
    <LayoutAside></LayoutAside>
    <LayoutArticle></LayoutArticle>
    <LayoutFooter></LayoutFooter>
  </div>
</template>

<script>
import LayoutHeader from './layout/Header.vue'
import LayoutAside from './layout/Aside.vue'
import LayoutArticle from './layout/Article.vue'
import LayoutFooter from './layout/Footer.vue'
export default {
  name: 'App',
  components: {
    LayoutHeader,LayoutAside,LayoutArticle,LayoutFooter
}
}
</script>

<style scoped>
#app {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
}
</style>
