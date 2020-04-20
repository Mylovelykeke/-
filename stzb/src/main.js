import Vue from 'vue'
import App from './App'
import '../static/iconfont/iconfont.css'
import WXrequest from './utils/wx-request'

Vue.prototype.$httpWX = WXrequest
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
