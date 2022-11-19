<template>
  <div class="privatecontent">
    <div v-for="(item, index) in privatecon" :key="index" class="peivateItem" @click="playMV(item.id)">
      <div class="urlAndicon">
        <img v-imglazy="item.picUrl" :key="item.picUrl" alt="" />
        <div class="icon">
          <i class="iconfont icon-MV"></i>
        </div>
      </div>

      <p>{{ item.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PrivateContent",
  props: ["privatecon"],
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
    methods: {
    playMV(id) {
      this.$router.push("/mv-detail/" + id);
    },
  },
};
</script>
<style lang="less" scoped>
.privatecontent {
  width: 100%;
  display: flex;
  justify-content: space-around;
  .peivateItem {
    width: 32%;
    .urlAndicon {
      position: relative;
      img {
        width: 100%;
      }
      .icon{
        position: absolute;
        top: 0;
        left: 3px;
        i{
            font-size: 18px;
        }
      }
    }

    p {
      margin: 0;
    }
  }
}
</style>