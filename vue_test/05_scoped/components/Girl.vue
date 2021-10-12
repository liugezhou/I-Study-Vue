<template>
	<div class="demo">
		<h2>Girl:{{name}}</h2>
	</div>
</template>

<script>
	export default {
		name:'Girl',
		data() {
			return {
				name:'Lan'
			}
		}
	}
</script>

<style scoped>
	.demo{
		background-color: palegoldenrod;
	}
</style>