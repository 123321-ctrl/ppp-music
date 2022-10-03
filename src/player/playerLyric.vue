<template>
  <div class="playerLyriv" ref="scroll">
    <ul>
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
    };
  },
  //   mounted(){
  //     console.log(this.$refs.scroll)
  //     this.$refs.scroll.scrollTo(0, 300);
  //   },
  watch: {
    lyric: {
      handler(newval) {
        // console.log(newval)
        this.lyricIndex = -1;
        this.lyricArray = parseLyric(newval);
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
          this.lyricIndex = i;
          /**如果歌词展示形式为列表，需要活跃歌词在中间时才滚动 */
          if (this.middle) {
            /**list形式时，活跃歌词不到中间不滚动 */
            if (
              this.lyricIndex < this.scrollNum ||
              this.lyricIndex > this.lyricArray.length - this.scrollNum
            )
              return;
          } else {
            this.$refs.scroll.scrollTo(0, 25 * this.lyricIndex);
          }
        }
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
  list-style: none;
  padding: 5px 0px;
}
.activecolor {
  color: rgb(57,143,234);
}
</style>