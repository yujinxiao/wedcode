import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },//主页
    {
      path: '/AboutView',
      component: AboutView
    },//关于
	{
		path : "/FriendsLink",
		name: 'FriendsLink',
		component: () => import('../views/FriendsLink.vue')
	},//友连接
	{
		path : "/Message",
		name: 'Message',
		component: () => import('../views/Message.vue')
	},//
	{
		path : "/Share",
		name: 'Share',
		component: () => import('../views/Share.vue')
	},//
  ]
})

export default router;