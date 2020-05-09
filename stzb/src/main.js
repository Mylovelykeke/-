import Vue from 'vue'
import App from './App'
import '../static/iconfont/iconfont.css'
import WXrequest from './utils/wx-request'
import bus from '@/utils/bus'
import { $Message } from '../static/dist/base/index'
Vue.prototype.$bus = bus
Vue.prototype.$httpWX = WXrequest
Vue.prototype.$Message = $Message
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue(App)
app.$mount()
