<template>
	<div>
		<Boy/>
		<hr>
		<Girl/>
	</div>
</template>

<script>
	//引入School组件
	import Boy from './components/Boy.vue'
	import Girl from './components/Girl.vue'

	export default {
		name:'App',
		components:{
			Boy,
			Girl
		}
	}
</script>
<style lang="less">
	.demo{
		.test{
			color:red;
		}
	}
</style>