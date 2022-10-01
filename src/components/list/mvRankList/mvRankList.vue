<template>
  <div class="mvList">
    <div
      v-for="(item, index) in topMv"
      :key="index"
      class="mvListItem"
      @click="enterMvDetail(item)"
    >
      <span>{{ index + 1 }}</span>
      <div class="title">
        <img :src="item.cover" alt="" />
        <div class="icon">
          <i class="iconfont icon-24gf-playCircle"></i>
        </div>
      </div>
      <div class="mass">
        <p>{{ item.name }}</p>
        <p class="artistName">{{ item.artistName }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mvRankList",
  props: ["topMv"],
  methods: {
    enterMvDetail(item) {
      this.$router.push("/mv-detail/" + item.id);
    },
  },
};
</script>

<style lang="less" scoped>
.mvList {
  width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  border-top: 2px solid rgb(63, 62, 62);
  padding-top: 10px;
  .mvListItem {
    position: relative;
    width: 48%;
    height: 100px;
    margin-bottom: 10px;
    span {
      position: absolute;
      top: 25px;
      left: 0;
    }
    .title {
      position: relative;
      left: 20px;
      height: 100%;
      img {
        height: 100%;
        width: 35%;
      }
      .icon {
        position: absolute;
        top: 33%;
        left: 14%;
        i {
          color: #fff;
          font-size: 28px;
        }
      }
    }
    .mass {
      position: absolute;
      left: 44%;
      top: -10px;
      .artistName {
        font-size: 13px;
      }
    }
  }
}
</style>