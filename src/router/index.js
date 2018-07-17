


import Vue from 'vue'
import Router from 'vue-router'

/*import Home from '@/containers/home/index'
import List from '@/containers/list/index'
import Detail from '@/containers/detail/index'
import Person from '@/containers/person/index'*/

const Home = resolve => require(['@/containers/home/index'], resolve);
const List = resolve => require(['@/containers/list/index'], resolve);
const Detail = resolve => require(['@/containers/detail/index'], resolve);
const Person = resolve => require(['@/containers/person/index'], resolve);


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home ,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },{
      path: '/list',
      name: 'List',
      component: List,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },{
      path: '/detail',
      name: 'Detail',
      component: Detail,
      meta: {
        keepAlive: false // 不需要被缓存
      }
    },{
      path: '/person',
      name: 'Person',
      component: Person,
      meta: {
        keepAlive: true // 需要被缓存
      }
    },
  ]
})


