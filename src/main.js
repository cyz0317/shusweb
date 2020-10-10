import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../node_modules/vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'
import { Popup, Cell, CellGroup, Lazyload } from 'vant'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(VueAwesomeSwiper /* { default options with global component } */)
// import 'lib-flexible'
// import { Button } from 'vant'
// import { Lazyload } from 'vant';
// import { Col, Row } from 'vant';
// import '@vant/touch-emulator';
// Vue.config.productionTip = false
// Vue.use(Button);
// Vue.use(Lazyload);
// Vue.use(Col);
// Vue.use(Row);
Vue.use(Popup)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(ElementUI)
Vue.use(Lazyload, {
  lazyComponent: true,
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
