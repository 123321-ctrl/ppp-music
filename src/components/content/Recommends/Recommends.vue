<template>
  <div class="recommends">
    <div class="head">
      <textarea
        name=""
        v-model="content"
        @keydown.enter="pushCommend()"
        autofocus
      ></textarea>
      <span class="combtn">
        <el-button type="text" @click="pushCommend()">评论</el-button>
      </span>
    </div>
    <div class="nicelist">
      <p>精彩评论</p>
      <div v-for="(item, index) in recommends" :key="index" class="list-item">
        <div class="left">
          <img :src="item.user.avatarUrl" alt="" />
        </div>
        <div class="right">
          <div class="desc">
            <span>{{ item.user.nickname }}：</span>
            <span class="content">{{ item.content }}</span>
          </div>
          <div class="bottom">{{ formatDate(item.time) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dateFtt } from "../../../utils/tools";
export default {
  name: "ReCommends",
  props: ["recommends"],
  data() {
    return {
      content: "",
    };
  },
  methods: {
    pushCommend() {
      alert("发表评论", this.content);
    },
    formatDate(time) {
      return dateFtt(new Date(time), "yyyy年MM月dd日 hh:mm:ss");
    },
  },
};
</script>

<style lang="less" scoped>
.recommends {
  width: 100%;
  .head {
    padding: 15px 10px 10px 10px;
    background: #41454e57;
    position: relative;
    height: 100px;
    textarea {
      width: 100%;
      height: 60px;
      resize: none;
    }
    .combtn {
      position: absolute;
      right: 6px;
      bottom: 0;
    }
  }
}
.list-item {
  display: flex;
  font-size: 15px;
  margin-bottom: 10px;
  .left {
    width: 48px;
    height: 48px;
    img {
      width: 100%;
      border-radius: 50%;
    }
  }
  .right {
    flex: 1;
    padding-left: 20px;
    overflow: hidden;
    .desc {
      padding: 5px 0px;
    }
  }
}
.list-item:nth-of-type(even){
    background-color: rgba(128, 128, 128, 0.13);
}
</style>