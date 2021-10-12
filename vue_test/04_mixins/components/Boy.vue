<template>
	<div class="school">
		<h2>Boy:{{name}}</h2>
		<button @click="showName">showName</button>
	</div>
</template>

<script>
// import { mixin,constant } from '../mixin' //局部混合
	export default {
		name:'Boy',
		data() {
			return {
				name:'Tom'
			}
		},
		// mixins:[mixin,constant] //局部混合
	}
</script>

<style>
	.school{
		background-color: rgb(255, 221, 67);
	}
</style>