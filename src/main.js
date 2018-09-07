// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'

import VueRouter from 'vue-router'

import VueResource from 'vue-resource'

import Liulan from"./components/Liulan.vue"
import Xinyuan from"./components/Xinyuan.vue"
import Story from"./components/Story.vue"
import Message from"./components/Message.vue"
import Mine from"./components/Mine.vue"


// 引入全部组件
// import Mint from 'mint-ui'

// Vue.use(Mint)

Vue.use(VueRouter)

Vue.use(VueResource)

Vue.config.productionTip = true

const routes = [{

  path: '/',

  component: Liulan

},{
  path: '/liulan',

  component: Liulan
},{
  path: '/xinyuan',
  component: Xinyuan
},{
  path: '/story',
  component: Story
},{
  path: '/message',
  component: Message
},{
  path: '/mine',
  component: Mine
}]

const router=new VueRouter({

  routes

})
/* eslint-disable no-new */
var vm = new Vue({

  el: '#app',

  router,

  components: { App },

  template: '<App/>',

  render: h => h(App)

 
});
