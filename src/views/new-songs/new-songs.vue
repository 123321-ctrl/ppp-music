  <template>
  <div>
    <span
      v-for="(item, index) in areas"
      :key="index"
      class="items"
      @click="handleAreasClick(index)"
    >
      {{ item.content }}
    </span>
    <songList :musicList="musicList" :newsongs="true"></songList>
  </div>
</template>

<script>
import { getTopSongs } from "../../network/discover";
import songList from "../../components/list/songList/songList.vue";
import { songDetail2 } from "../../network/detail";
export default {
  name: "new-songs",
  components: {
    songList,
  },
  data() {
    return {
      areas: [
        { value: 0, content: "全部" },
        { value: 7, content: "华语" },
        { value: 96, content: "欧美" },
        { value: 16, content: "韩国" },
        { value: 8, content: "日本" },
      ],
      musicList: [],
      currentArea: 0,
    };
  },
  created() {
    this.getTopSongss();
  },
  methods: {
    handleAreasClick(index) {
      this.currentArea = this.areas[index].content;
      this.getTopSongss();
    },
    getTopSongss() {
      // this.musicList = [];
      getTopSongs(this.currentArea).then((res) => {
        let data = res.data.data
        for(let i=0; i<data.length; i++){
          let song = new songDetail2(data[i]);
          this.musicList.push(song);
        }
        
        // this.musicList = res.data.data
        // console.log(this.musicList)
      });
    },
  },
};
</script>

<style scoped>
.items {
  display: inline-block;
  width: 50px;
}

.items:hover {
  cursor: pointer;
  color: aqua;
}
</style>