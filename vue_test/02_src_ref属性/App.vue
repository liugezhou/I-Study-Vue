<template>
	<div>
		<h1 v-text="msg" ref="title"></h1>
		<button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
		<Boy ref="sch"/>
	</div>
</template>

<script>
	//引入School组件
	import Boy from './components/Boy.vue'

	export default {
		name:'App',
		components:{Boy},
		data() {
			return {
				msg:'欢迎学习Vue！'
			}
		},
		methods: {
			showDOM(){
				console.log(this.$refs.title) //真实DOM元素
				console.log(this.$refs.btn) //真实DOM元素
				console.log(this.$refs.sch) //boy组件的实例对象（vc）
			}
		},
	}
</script>
