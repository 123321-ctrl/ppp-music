<template>
  <div :class="['aside', asideClass]">
    <el-col>
      <el-menu
        class="el-menu-vertical-demo"
        :background-color="theme === 'light' ? lightbgc : darkbgc"
        active-text-color="#ffd04b"
        height="calc(100% - 58px - 60px)"
      >
        <!-- 可优化v-for -->
        <el-menu-item index="1">
          <router-link to="/individuation" :class="aTheme"
            ><i class="iconfont icon-yinle1"></i
            ><span>个性推荐</span></router-link
          >
        </el-menu-item>

        <el-menu-item index="2">
          <router-link to="/allmusiclist" :class="aTheme"
            ><i class="iconfont icon-gedan"></i> <span>歌单</span></router-link
          >
        </el-menu-item>

        <el-menu-item index="3">
          <router-link to="/ranklist" :class="aTheme"
            ><i class="iconfont icon-paixingbang"></i
            ><span>排行榜</span></router-link
          >
        </el-menu-item>

        <el-menu-item index="4">
          <router-link to="/artist-list" :class="aTheme"
            ><i class="iconfont icon-geshou"></i><span>歌手</span></router-link
          >
        </el-menu-item>

        <el-menu-item index="5">
          <router-link to="/mv" :class="aTheme"
            ><i class="iconfont icon-MV"></i><span>MV</span></router-link
          >
        </el-menu-item>

        <el-menu-item index="6">
          <router-link to="/new-songs" :class="aTheme"
            ><i class="iconfont icon-yinle"></i
            ><span>最新音乐</span></router-link
          >
        </el-menu-item>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "LayoutAside",
  data() {
    return {
      darkbgc: "rgb(22, 22, 26)",
      lightbgc: "rgb(255, 255, 255)",
      Dtextcolor: "rgb(211, 211, 211)",
      Ltextcolor: "rgb(0, 0, 0)",
      isShow: true,
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    console.log(this.theme);
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    show() {
      console.log(this.isShow);
      this.isShow = !this.isShow;
    },
  },
  computed: {
    theme() {
      return this.$store.state.theme;
    },
    asideClass() {
      return `${this.theme + "-theme"}`;
    },
    aTheme() {
      return `${this.theme + "-a"}`;
    },
  },
};
</script>
<style lang="less" scoped>
@import "../utils/theme.less";
.light-theme {
  background-color: @LightAside;
  color: @lightFontColor;
}

.dark-theme {
  background-color: @DarkAside;
  color: @darkFontColor;
}
.light-a {
  color: @lightFontColor;
}
.dark-a {
  color: #fff;
}
i {
  margin-right: 10px;
}
.aside {
  width: 18%;
  height: calc(100% - 58px - 60px);
  overflow: hidden;
  float: left;
  @media screen and (max-width: 568px) {
    width: 13.5%;
  }
}
.el-col-24 {
  height: 600px;
}
a {
  text-decoration: none;
  // color: #fff;
  display: block;
  height: 56px;
  width: 77%;
  position: absolute;
  left: 48px;
  top: -1px;
  font-size: 12px;
}
.router-link-active {
  color: #ffd04b;
}
li:hover a,
li:hover i {
  color: #ffd04b;
}
</style>