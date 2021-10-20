<template>
	<div>
		<h1>{{msg}},打印出的名字为：{{girlName}}</h1>
		<Boy :getBoy="getBoy"/>
		<!-- <Girl @getGril="getGirl" @demo="m1"/> -->
		<Girl ref="girl"/>
	</div>
</template>

<script>
import Boy from './components/Boy.vue';
import Girl from './components/Girl.vue'

	export default {
		name:'App',
		data(){
			return{
				msg:'Vue 666!',
				girlName:''
			}
		},
		components:{
			Boy,
			Girl
		},
		methods: {
			getBoy(val){
				console.log(val)
			},
			getGirl(val){
				this.girlName = val
			},
			m1(){
				console.log('m1')
			}
		},
		mounted() {
			// 挂载完之后5s再在Girl组件上绑定事件
			// setTimeout(() => {
				this.$refs.girl.$on('getGril',this.getGirl)
				// this.$refs.girl.$once('getGril',this.getGirl) //触发一次
			// }, 3000);
			
		},
	}
</script>

