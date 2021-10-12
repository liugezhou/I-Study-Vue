<template>
	<div class="school">
		<h2>Boy:{{name}}</h2>
	</div>
</template>

<script>
	export default {
		name:'Boy',
		data() {
			return {
				name:'Tom',
			}
		},
	}
</script>

<style>
	.school{
		background-color: gray;
	}
</style>