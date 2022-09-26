import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        songUrl: null,
        theme:'light'
    },
    mutations: {
        getsongUrl(state,songUrl) {
            state.songUrl = songUrl
            // console.log(state.songUrl)
        },
        setTheme(state, theme) {
            state.theme = theme;
            localStorage.setItem('theme', theme);
          },
    }
})

// this.$store.commit('increment')
// console.log(this.$store.state.count)