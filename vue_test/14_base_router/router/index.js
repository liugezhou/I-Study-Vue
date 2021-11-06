// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//创建并暴露一个路由器
export default new VueRouter({
	routes:[
		{
			name:'about',
			path:'/about',
			component:About
		},
		{
			name:'home',
			path:'/home',
			component:Home,
			children:[
				{
					name:'news',
					path:'news',
					component:News,
					children:[
						{
							name:'newsDetail',
							path:'detail',
							component:Detail
						}
					]
				},
				{
					name:'message',
					path:'message',
					component:Message,
					children:[
						{
							name:'messageDetail',
							path:'detail/:id/:title',
							component:Detail,
							//props的第一种写法：值为对象,所有key-value都会以props形式传给detail组件
							// props:{
							// 	a:1,
							// 	b:2
							// }
							//props的第二种写法，值为boolean,若为值，则该路由组件收到的所有params参数传递过来，以props形式传递给组件
							// props:true
							// props的第三种写法，值为函数
							props({params:{id,title}} ){
								return {id,title}
							}
						}
					]
				}
			]
		}
	]
})
