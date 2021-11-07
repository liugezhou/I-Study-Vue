// 该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router';
//引入组件
import About from '../pages/About';
import Home from '../pages/Home';
import News from '../pages/News';
import Message from '../pages/Message';
import Detail from '../pages/Detail';

//创建并暴露一个路由器
const router = new VueRouter({
  routes: [
    {
      name: 'About',
      path: '/about',
      component: About,
      meta: {
        auth: true,
        title: '关于',
      },
      peiqi: false,
    },
    {
      name: 'home',
      path: '/home',
      component: Home,
      meta: {
        title: '主页',
      },
      children: [
        {
          name: 'news',
          path: 'news',
          component: News,
          meta: {
            title: '新闻',
          },
          children: [
            {
              name: 'newsDetail',
              path: 'detail',
              component: Detail,
							meta: {
								title: '详情',
							},
            },
          ],
        },
        {
          name: 'message',
          path: 'message',
          component: Message,
          meta: {
            title: '消息',
          },
          children: [
            {
              name: 'messageDetail',
              path: 'detail/:id/:title',
              component: Detail,
							meta: {
								title: '详情',
							},
              //props的第一种写法：值为对象,所有key-value都会以props形式传给detail组件
              // props:{
              // 	a:1,
              // 	b:2
              // }
              //props的第二种写法，值为boolean,若为值，则该路由组件收到的所有params参数传递过来，以props形式传递给组件
              // props:true
              // props的第三种写法，值为函数
              props({ params: { id, title } }) {
                return { id, title };
              },
            },
          ],
        },
      ],
    },
  ],
});
//在每一次路由切换之前，都需要调用一个函数--全局前置路由
router.beforeEach((to, from, next) => {
  if (to.meta.auth && window.localStorage.getItem('name') === 'Tom') {
    alert('stop forward!');
  } else {
    next();
  }
});

//后置路由守卫
router.afterEach((to, from) => {
	document.title = to.meta.title || '六个周';
});
export default router;
