import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 精简版的写法不用每次都引入模块
//获取 上级目录modules的 所有后缀名为 .js的文件
const modulesFiles = require.context('./modules', true, /\.js$/)
// console.log(modulesFiles)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  modules[moduleName]. namespaced=true
  return modules
}, {})
// console.log( modules );
export  const store = new Vuex.Store({
  modules,
  state: {
    
  },
  mutations: {
  }
})