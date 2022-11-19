import Vue from 'vue'
import Vuex from 'vuex'
import { getMusicUrl, Song } from "../network/detail";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        songUrl: null,
        theme: 'light',
        isloading: false,
        musicList: [],
        currentIndex:null
    },
    mutations: {
        getsongUrl(state, songUrl) {
            state.songUrl = songUrl
        },
        setTheme(state, theme) {
            state.theme = theme;
            localStorage.setItem('theme', theme);
        },
        /**显示隐藏loading */
        showLoading(state) {
            state.isloading = true;
        },
        hiddenLoading(state) {
            state.isloading = false;
            // loadingInstance.close();
        },
        test(state){
            console.log(state.currentIndex)
        }
    },
    actions: {
        handlePlay({ commit,state },num){
            getMusicUrl(state.musicList[num.index].id).then((res) => {
                const songData = res.data.data[0].url;
                let song = new Song(songData, state.musicList[num.index]);
                this.songUrl = song;
                commit("getsongUrl", this.songUrl);
            });
        }
    }
})