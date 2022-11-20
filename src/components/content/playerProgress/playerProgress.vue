<template>
  <div class="progressBox">
    <!-- 背景条 -->
    <div
      class="progressBg"
      ref="progressBgId"
      @click="handleClick"
      @mousemove="handlemousemove"
      @mousedown="handlemousedown"
    ></div>
    <!-- 进度条 -->
    <div class="progress" :style="{ width: percentage + '%' }"></div>
  </div>
</template>

<script>
export default {
  name: "playerProgress",
  props: ["percentage"],
  data() {
    return {
      pointerVal: 50,
      p_obj: {},
      isDarg: false, //是否处于拖动状态
    };
  },
  mounted() {
    //获得页面中指定元素的上右下左相对于浏览器的位置
    this.p_obj = this.$refs.progressBgId.getBoundingClientRect();
    document.body.addEventListener("mouseup", this.handlemouseup);
  },
  methods: {
    handleClick(e) {
      this.pointerVal = parseInt(e.clientX - this.p_obj.left);
      const change = (this.pointerVal / this.p_obj.width) * 100;
      this.$emit("changePercent", change);
    },
    handlemousemove(e) {
      if (this.isDarg) {
        this.pointerVal = parseInt(e.clientX - this.p_obj.left);
        const change = (this.pointerVal / this.p_obj.width) * 100;
        this.$emit("changePercent", change);
      }
    },
    handlemousedown() {
      this.isDarg = true;
    },
    handlemouseup() {
      this.isDarg = false;
    },
  },
};
</script>

<style scoped>
.progressBox {
  width: 100%;
  position: relative;
}
.progressBg {
  width: 99%;
  height: 10px;
  line-height: 22px;
  background-color: rgb(124, 181, 231);
  opacity: 0.3;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: -3px;
  z-index: 10;
  border-radius: 5px;
}
.progress {
  height: 10px;
  background-color: rgb(64, 158, 255);
  opacity: 0.3;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: -3px;
  z-index: 8;
  border-radius: 5px;
  transition: all 1s linear;
}
</style>