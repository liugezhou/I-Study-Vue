<template>
	<div class="school">
		<h2>Boy:{{name | mySlice}}</h2>
		<input type="text" v-fbind="name">
		<button @click="test">点我测试plugin中事件</button>
	</div>
</template>

<script>
	export default {
		name:'Boy',
		data() {
			return {
				name:'TomWOSOJEda'
			}
		},
		methods: {
			test(){
				this.demo()
			}
		},
	}
</script>

<style>
	.school{
		background-color: rgb(255, 221, 67);
	}
</style>