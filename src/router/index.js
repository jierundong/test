import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import main from "../components/musichall/main.vue"
import exam from "../components/exam.vue"
import carousel from "../components/musichall/carousel.vue"
import carousel2 from "../components/find/carousel2.vue"
import navigation from "../components/musichall/navigation.vue"
import findcarousel from "../components/find/findcarousel.vue"
import message from "../components/find/message.vue"
import message1 from "../components/find/message1.vue"
import message2 from "../components/find/message2.vue"
import mynavigation from "../components/my/mynavigation.vue"
import mynavigation2 from "../components/my/mynavigation2.vue"
import mymessage1 from "../components/my/mymessage1.vue"
import mymessage2 from "../components/my/mymessage2.vue"
import like from "../components/my/like.vue"
import recently from "../components/my/recently.vue"
import download from "../components/my/download.vue"
import follow from "../components/my/follow.vue"
import login from "../components/my/login.vue"
import register from "../components/my/register.vue"
import updateupwd from "../components/my/updateupwd.vue"
import singer from "../components/musichall/singer.vue"
import paihang from "../components/musichall/paihang.vue"
import musiclist from "../components/musichall/musiclist.vue"
import hot from "../components/musichall/hot.vue"
import search from "../components/search.vue"
Vue.use(Router)



export default new Router({
  
  routes: [
    {path:'/search',component:search},
    {path:'/follow',component:follow},
    {path:'/download',component:download},
    {path:'/recently',component:recently},
    {path:'/like',component:like},
    {path:'/hot',component:hot},
    {path:'/musiclist',component:musiclist},
    {path:'/paihang',component:paihang},
    {path:'/singer',component:singer},
    {path:'/updateupwd',component:updateupwd},
    {path:'/register',component:register},
    {path:'/login',component:login},
    {path:'/mymessage1',component:mymessage1},
    {path:'/mymessage2',component:mymessage2},
    {path:'/mynavigation2',component:mynavigation2},
    {path:'/mynavigation',component:mynavigation},
    {path:'/message',component:message},
    {path:'/message1',component:message1},
    {path:'/message2',component:message2},
    {path:'/findcarousel',component:findcarousel},
    {path:'/navigation',component:navigation},
    {path:'/carousel',component:carousel},
    {path:'/carousel2',component:carousel2},
    {path:'/exam',component:exam},
    {path:'/main',component:main},
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ],
  
})
