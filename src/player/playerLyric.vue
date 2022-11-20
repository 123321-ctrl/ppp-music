<template>
  <div class="playerLyriv" ref="scroll">
    <ul ref="ul">
      <li
        v-for="(item, index) in lyricArray"
        :key="index"
        :class="[index == lyricIndex ? 'activecolor' : '']"
      >
        {{ item[1] }}
      </li>
    </ul>
  </div>
</template>

<script>
import { parseLyric } from "../utils/parseLyric";
export default {
  name: "playerLyric",
  props: ["lyric", "currentTime", "middle"],
  data() {
    return {
      lyricArray: [], //转换后的歌词数组
      lyricIndex: -1, //活跃的歌词行数
      scrollNum: 5,
      liHeight: 24, //每一个li的高度
    };
  },
  computed: {
    //容器高度
    scrollHeight() {
      return this.$refs.scroll.clientHeight;
    },
    maxOffset() {
      return this.$refs.ul.clientHeight - this.scrollHeight;
    },
  },
  watch: {
    lyric: {
      handler(newval) {
        // console.log(newval)
        this.lyricIndex = -1;
        this.lyricArray = parseLyric(newval);
        this.$refs.scroll.scrollTo({ top: 0, behavior: "smooth" });
      },
      immediate: true,
    },
    currentTime(currentTime) {
      /**歌词对应时间判断 */
      for (let i = 0; i < this.lyricArray.length; i++) {
        const line = this.lyricArray[i];
        const nextLine = this.lyricArray[i + 1];
        /**如果歌曲currentTime大于当前行歌曲时间，并且，下一行不为空或者当前currentTime小于下一行时间 */
        if (
          currentTime >= line[0] &&
          (!nextLine || currentTime < nextLine[0])
        ) {
          //正在播放
          this.lyricIndex = i;
          this.setOffset(this.lyricIndex);
        }
      }
    },
  },
  methods: {
    setOffset(index) {
      if (index > 5) {
        this.$refs.scroll.scrollTo({ top: this.liHeight*(index-5), behavior: "smooth" });
      }
    },
  },
};
</script>

<style scoped>
.playerLyriv {
  height: 342px;
  overflow-y: scroll;
  font-size: 13px;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  height: 24Px;
  line-height: 24Px;
  list-style: none;
}
.activecolor {
  color: rgb(57, 143, 234);
}
</style>