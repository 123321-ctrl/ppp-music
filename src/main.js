import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/fonts/iconfont/iconfont.css'

Vue.config.productionTip = false

import { Col,Menu,MenuItem,Carousel,CarouselItem,Cascader,tabs,tabPane,Table,TableColumn,Tag,avatar,button,Message,Switch } from 'element-ui';
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

Vue.prototype.$message = Message

import animated from 'animate.css';
Vue.use(animated)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
