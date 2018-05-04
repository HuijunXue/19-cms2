import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Index from "../components/tabber/Index"
import Cart from "../components/tabber/Cart"
import Member from "../components/tabber/Member"
import Search from "../components/tabber/Search"
import NewsList from "../components/news/NewsList"
import NewsDetail from "../components/news/NewsDetail"
import PicsList from "../components/pics/PicsList.vue"
import PicsDetail from "../components/pics/PicsDetail.vue"
import GoodsList from "../components/goods/GoodsList.vue"
import GoodsDetail from "../components/goods/GoodsDetail.vue"

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path:"/home",
      component:Index
    },
    {
      path:"/member",
      component:Member
    },
    {
      path:"/cart",
      component:Cart
    },
    {
      path:"/search",
      component:Search
    },
    {
      path:"/newsList",
      component:NewsList
    },
    {
      path:"/newsDetail",
      component:NewsDetail
    },
    {
      path:"/picsList",
      component:PicsList
    },
    {
      path:"/picsDetail",
      component:PicsDetail
    },
    {
      path:"/goodsList",
      component:GoodsList
    },
    {
      path:"/goodsDetail",
      component:GoodsDetail
    }
  ],
  linkActiveClass: "mui-active"
})
