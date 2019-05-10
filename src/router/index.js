import Vue from 'vue'
import Router from 'vue-router'

const Index = () => import('pages/index')
const Home = () => import('pages/home')
const Car = () => import('pages/car')
const Detail = () => import('pages/detail')
// import Home from '@/pages/home'
// import Car from '@/pages/car'
// import Detail from '@/pages/detail'
// import Index from '@/pages/index'

Vue.use(Router)

export default new Router({
  routes: [
  	{
	    path:'',
	    redirect:"/home"
	},  
	{
	    path:'/home',
	    component:Home,
	    children:[
	        {
	            path:'',
	            redirect:'index'
	        },
	        {
	            path:'index',
	            name:'index',
	            component:Index
	           
	        },
			{
			    path:'/car',
			    name:'car',
			    component:Car
			}
	    ]
	},
	{
		path:'/detail/:id',
		component:Detail,
		name:'detail'
	}
  ]
})
