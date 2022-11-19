<template>
  <div class="search">
    <el-popover placement="top-start" width="300" trigger="click">
      <div class="table">
        <div
          v-for="(item, index) in hotlist"
          :key="index"
          class="tableItem"
          @click="handleHotItemClick(index)"
        >
          <span class="index" :class="{ 'search-active': index <= 2 }">{{
            index + 1
          }}</span>
          <div class="desc">
            <div class="word">
              <span>{{ item.searchWord }}</span>
              <span class="score">{{ item.score }}</span>
            </div>
            <span class="content">{{ item.content }}</span>
          </div>
        </div>
      </div>
        <input
          v-model="searchWord"
          slot="reference"
          placeholder="请输入内容查找"
          @keyupEnter="goSearchDetailPage"
        />
    </el-popover>
  </div>
</template>

<script>
import { hotSearchDetail } from "../../../network/search";
export default {
  name: "mySearch",
  data() {
    return {
      searchWord: "",
      hotlist: [],
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    this.hotSearchDetails();
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    goSearchDetailPage() {
      this.$router.push(`/search-detail/${this.keywords}`);
    },
    hotSearchDetails() {
      hotSearchDetail().then((res) => {
        this.hotlist = res.data.data;
      });
    },
    /**处理热搜项点击--->跳转到搜索详情页面 */
    handleHotItemClick(index) {
      this.$router.push("/search-detail/" + this.hotlist[index].searchWord);
    },
  },
};
</script>
<style lang="less" scoped>
.search {
  position: relative;
  height: 100%;
  width: 100%;
}
.table {
  height: 500px;
  overflow: auto;
  .tableItem {
    display: flex;
    height: 60px;
    line-height: 40px;
    .index {
      position: relative;
      top: 10px;
      display: inline-block;
      width: 35px;
    }
    .desc {
      position: relative;
      width: 100%;
      .word {
        display: inline-block;
        height: 38px;
        line-height: 38px;
        .score {
          font-size: 1rem;
          color: rgba(205, 39, 39, 0.642);
          padding-left: 5px;
        }
      }
      .content {
        position: absolute;
        top: 22px;
        left: 0;
        font-size: 12px;
      }
    }
  }
  .search-active {
    color: red;
  }
  .tableItem:hover {
    background-color: rgba(128, 128, 128, 0.612);
  }
}
input {
  width: 80%;
  font-size: 0.5rem;
}
</style>