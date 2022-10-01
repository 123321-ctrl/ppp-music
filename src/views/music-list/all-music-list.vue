<template>
  <div class="allmusiclist">
    <div class="block">
      <el-cascader
        v-model="value"
        :options="options"
        :props="{ expandTrigger: 'hover' }"
        @change="handleChange"
        size="mini"
      ></el-cascader>
    </div>
    <template>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane
          v-for="(item, index) in menu"
          :key="index"
          :label="item.name"
          :name="item.name"
        >
        </el-tab-pane>
        <!-- <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane> -->
      </el-tabs>
    </template>
    <MusicList :personalized="playlists"></MusicList>
    <div class="all-musiclist-bottom">
      <el-pagination
        background
        :current-page.sync="offset"
        :page-count="50"
        @current-change="onPageChange"
      />
    </div>
  </div>
</template>

<script>
import {
  getCatList,
  getMusicListHot,
  getPlayList,
} from "../../network/music-list";
import MusicList from "../../components/list/musiclist/MusicList.vue";
export default {
  name: "AllMusicList",
  components: {
    MusicList,
  },
  data() {
    return {
      activeName: "华语",
      value: [],
      categories: [],
      menu: [],
      playlists: [],
      cat:'华语',
      offset: 1,
      limit: 50,
    };
  },
  methods: {
    onPageChange(){
      this.clickPlayList()
    },
    handleChange(value) {
      this.reset()
      this.cat = value[1]
      this.clickPlayList()
    },

    //点击菜单
    handleClick(tab) {
      this.reset()
      this.cat = tab.$options.propsData.name;
      this.clickPlayList()
    },

    clickPlayList() {
      getPlayList(this.cat,this.limit,this.offset).then((res) => {
        this.playlists = res.data.playlists;
        // console.log(this.playlists);
      });
    },
    reset(){
      this.offset=1;
      this.playlists=[]
    },
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    getCatList().then((res) => {
      this.categories = Object.values(res.data.categories);
      let subs = res.data.sub;
      this.options = this.categories.map((item, index) => {
        return {
          value: index,
          label: item,
          children: [],
        };
      });
      //   console.log(subs);
      for (let i = 0; i < this.options.length; i++) {
        this.options[i].children = subs.filter((item) => {
          return item.category === this.options[i].value;
        });
        this.options[i].children = this.options[i].children.map((item) => {
          return {
            value: item.name,
            label: item.name,
          };
        });
      }
      //   console.log(this.options);
    });
    getMusicListHot().then((res) => {
      this.menu = res.data.tags;

      //一获取热门标签就加载列表
      this.clickPlayList()
    });
  },
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>