<template>
	<div class="school">
		<h2>Boy:{{msg}}</h2>
		<h3>{{name}}</h3>
		<h3>{{myAge + 1}}</h3>
		<button @click="updateAge">尝试修改收到的年龄</button>
	</div>
</template>

<script>
	export default {
		name:'Boy',
		data() {
			return {
				msg:'Hello Vue',
				myAge:this.age
			}
		},
		// props:['name','age'], 简单接收
		// props:{					简单声明接收：对类型进行限制
		// 	name:String,
		// 	age:Number
		// },
		props:{
			name:{
				type:String,
				required:true
			},
			age:{
				type:Number,
				default:99
			}
		},
		methods: {
			updateAge(){
				this.myAge ++
			}
		},
	}
</script>

<style>
	.school{
		background-color: rgb(255, 221, 67);
	}
</style>