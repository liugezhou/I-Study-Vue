<template>
	<div class="demo">
		<h2 class="test">Boy:{{name}}</h2>
	</div>
</template>

<script>
	export default {
		name:'Boy',
		data() {
			return {
				name:'TomA'
			}
		},
	}
</script>

<style scoped>
	.demo{
		background-color: skyblue;
	}
</style>