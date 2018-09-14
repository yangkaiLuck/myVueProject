import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/Login'  // 导入组件，@代表从根目录下找。

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',   	 	// 路径需要和App.vue中一致，不然找不到。/目录建议默认一个，不然首页会为空。
      name: 'Login',    // 这个名字不是很重要，可写可不写，主要是区分组件功能
      component: Login  // 写组件文件名字。
    }
  ]
})
