import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/fonts/iconfont/iconfont.css'

Vue.config.productionTip = false

import { Col,Menu,MenuItem,Carousel,CarouselItem,Cascader,tabs,tabPane,Table,TableColumn,Tag,avatar,button,Message,Switch,pagination,progress } from 'element-ui';
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Cascader)
Vue.use(tabs)
Vue.use(tabPane)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tag)
Vue.use(avatar)
Vue.use(button)
Vue.use(Switch)
Vue.use(pagination)
Vue.use(progress)

Vue.prototype.$message = Message

import animated from 'animate.css';
Vue.use(animated)

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
const loadimage = require('./assets/gif/loading.gif')

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: loadimage,
  attempt: 1
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
