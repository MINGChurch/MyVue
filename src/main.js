import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import fastclick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
// import 'styles/iconfont.css'

//fastclick
fastclick.attach(document.body);
// 引入mockjs
require('./mock')
//不能写反
Vue.use(VueAxios,axios)
Vue.use(ElementUI)
Vue.config.productionTip = false





new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
