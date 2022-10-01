<template>
  <div class="content">
    <div v-for="(item, index) in subs" :key="index" class="item">
      <img :src="item.avatarUrl" alt="" />
      <div class="nickname">{{ item.nickname }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MusicListLive",
  props: ["subs"],
};
</script>

<style scoped>
.content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.item {
  width: calc(10%);
  font-size: 12px;
  text-align: center;
  padding: 15px 10px;
}
.item img {
  width: 60%;
  border-radius: 50%;
}
.nickname {
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
</style>