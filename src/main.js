import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Router from "vue-router"
import {store} from './store';
import ElementUI from 'element-ui';
import echarts from 'echarts';
import moment from 'moment'; 
import  axios from 'axios';
// import 'element-ui/lib/theme-chalk/index.css';
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false;
Vue.prototype.$moment = moment;
Vue.prototype.$echarts = echarts;
Vue.prototype.$axios = axios;
Vue.use(ElementUI, {
    size: 'small'
});

/////////跳转报错/////
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error=> error)
}
//路由拦截  跳转时判断一些东西
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`;
  next();
});
///////
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
