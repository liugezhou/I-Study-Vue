<template>
	<div class="demo">
		<h2 @click="sendGril">Girl:{{name}}</h2>
		<button @click="demo">demo</button>
		<button @click="unbind">解绑getGirl事件</button>
		<button @click="death">销毁当前组件的实例(vc)</button>
	</div>
</template>

<script>
	export default {
		name:'Girl',
		data() {
			return {
				name:'GirlName'
			}
		},
		methods:{
			sendGril(){
				this.$emit('getGril',this.name)
			},
			unbind(){
				this.$off('getGril')  //解绑一个自定义事件
				// this.$off(['getGirl','demo'])   //解绑选择的自定义事件
				// this.$off() //解绑全部的自定义事件
			},
			demo(){
				this.$emit('demo')
			},
			death(){
				this.$destroy()
			}
		}
	}
</script>

<style scoped>
	.demo{
		background-color: palegoldenrod;
	}
</style>