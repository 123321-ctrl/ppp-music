import Vue from 'vue'
import Vuex from 'vuex'
// import { Loading } from 'element-ui'

// let loadingInstance;

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        songUrl: null,
        theme: 'light',
        isloading: false,
    },
    mutations: {
        getsongUrl(state, songUrl) {
            state.songUrl = songUrl
            // console.log(state.songUrl)
        },
        setTheme(state, theme) {
            state.theme = theme;
            localStorage.setItem('theme', theme);
        },
        /**显示隐藏loading */
        showLoading(state) {
            state.isloading = true;
            // loadingInstance = Loading.service({
            //     fullscreen: false, 
            //     text: '正在加载', 
            //     spinner: 'el-icon-loading'
            // });
        },
        hiddenLoading(state) {
            state.isloading = false;
            // loadingInstance.close();
        },
    }
})

// this.$store.commit('increment')
// console.log(this.$store.state.count)