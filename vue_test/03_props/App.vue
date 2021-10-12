<template>
	<div>
		<Boy name="Tom" :age="18" />
		<hr>
		<Boy name="Zhou" />
	</div>
</template>

<script>
	//引入School组件
	import Boy from './components/Boy.vue'

	export default {
		name:'App',
		components:{
			Boy
		}
	}
</script>
