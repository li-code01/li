import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../views/login.vue'
import Questionnaire from '../views/Questionnaire.vue'
Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'login',
		component: login
	},
	{
		path: '/Questionnaire',
		name: 'Questionnaire',
		component: Questionnaire
	},
	{
		path: '/index',
		name: 'Home',
		component: Home
	},
	
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
