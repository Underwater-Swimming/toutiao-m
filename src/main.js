import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// vant引入
import Vant from 'vant'
import 'vant/lib/index.css'

// 引入字体图标
// import './assets/font/iconfont.css'

// 加载去全局样式
import './style/index.less'

// 加载动态设置 REM 基准值
import 'amfe-flexible'

Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
