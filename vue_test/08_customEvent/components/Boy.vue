<template>
	<div>
		<h2 @click="sendName">Boy:{{name}}</h2>
	</div>
</template>

<script>
	export default {
		name:'Boy',
		props:['getBoy'],
		data() {
			return {
				name:'TomA'
			}
		},
		methods: {
			sendName(){
				this.getBoy(this.name)
			}
		},
	}
</script>
