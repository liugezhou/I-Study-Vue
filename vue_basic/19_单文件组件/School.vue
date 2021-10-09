<template>
	<div class="demo">
		<h2>名字：{{name}}</h2>
		<h2>年龄：{{age}}</h2>
		<button @click="showName">点我提示我的名</button>	
	</div>
</template>

<script>
	 export default {
		name:'School',
		data(){
			return {
				name:'LiuGeZhou',
				age:'18'
			}
		},
		methods: {
			showName(){
				alert(this.name)
			}
		},
	}
</script>

<style>
	.demo{
		background-color: orange;
	}
</style>