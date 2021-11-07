<template>
	<h2>我是About的内容</h2>
</template>

<script>
	export default {
		name:'About',
		beforeDestroy() {
			// console.log('About组件被销毁了！')
		},
		mounted() {
			// console.log(this.$route)
			// console.log('Abount组件挂载成功了！')
		},
		beforeRouteEnter (to, from, next) {
			next()
			console.log('通过路由规则，进入改组件时被调用！')
		},
		beforeRouteLeave (to, from, next) {
			console.log('通过路由规则，离开该组件时被调用！')
			next()
		}
	}
</script>