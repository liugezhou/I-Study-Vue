<template>
	<div>
		<ul>
			<li v-for="item in messageList" :key="item.id">
				{{item.title}}&nbsp;&nbsp;<button @click="pushShow(item)">push查看</button><button @click="replaceShow()">替换查看</button>
			</li>
			<input type="text">
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name:'Message',
		data(){
			return{
				messageList:[
					{id:'001',title:'Message01'},
					{id:'002',title:'Message02'},
					{id:'003',title:'Message03'},
				]
			}
		},
		destroyed() {
		console.log('Message销毁了')
	},
		methods: {
			pushShow(item){
				this.$router.push({
					name:"messageDetail",
					params:{
						id:item.id,
						title:item.title
					}
				})
			},
			replaceShow(item){
				this.$router.replace({
					name:"messageDetail",
					params:{
						id:item.id,
						title:item.title
					}
				})
			}
		},
	}
</script>