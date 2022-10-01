<template>
  <div class="artistDescDetail">
    <div class="desc">
      <h4>{{ name }}简介</h4>
      <p>{{ intro }}</p>
    </div>
    <div class="content">
      <div v-for="(item, index) in descDetail" :key="index">
        <h4>{{ item.ti }}</h4>
        <div>
          <p v-for="(item, index) in formatText(item.txt)" :key="index">
            {{ item }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getArtistDescDetail} from "../../../network/artist";
export default {
  name: "ArtistDescDetail",
  props: ["artistId", "name"],
  data() {
    return {
      descDetail: [],
      intro:null
    };
  },
  watch: {
    artistId() {
      this.initRequest();
    },
  },
  created() {
      this.initRequest();
  },
  methods: {
    /**格式化文本 */
    formatText(text) {
      let newText = text.split("\n");
      return newText;
    },
    initRequest() {
      getArtistDescDetail(this.artistId).then((res) => {
        this.descDetail = res.data.introduction;
        this.intro = res.data.briefDesc;
      });
    },
  },
};
</script>

<style scoped>
</style>