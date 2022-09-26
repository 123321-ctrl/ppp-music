<template>
  <div class="relatedSug">
    <div v-for="(item, index) in relatedMvs" :key="index" class="relatedItem" @click="playMV(item.id)">
      <div class="left">
        <img :src="item.cover" alt="" />
        <div class="count">
          <i class="iconfont icon-MV"></i>
          <div class="play-count">{{ item.playCount }}</div>
        </div>
      </div>
      <div class="right">
        <div class="name">
            <el-tag>MV</el-tag>
          {{ item.name }}
        </div>
        <div class="artist">{{ item.artistName }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "relatedSug",
  props: ["relatedMvs"],
  methods:{
    playMV(id){
        this.$router.push("/mv-detail/" + id);
    }
  }
};
</script>

<style lang="less" scoped>
.relatedItem{
    width: 100%;
    display: flex;
    .left{
        position: relative;
        width: 50%;
        img{
            width: 100%;
        }
        .count{
            position: absolute;
            right: 0;
            top: 0;
            color: white;
            display: flex;
            .play-count{
                font-size: 13px;
                margin-left: 5px;
            }
        }
    }
    .right{
        flex: 1;
        padding-left: 10px;
        position: relative;
        .name{
            font-size: 15px;
        }
        .artist{
            position: absolute;
            bottom: 7px;
            font-size: 13px;
        }
    }
}
</style>