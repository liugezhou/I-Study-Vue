<template>
	<div>
		<h1>当前求和为：{{sum}}</h1>
		<h3>当前求和放大10倍为：{{bigSum}}</h3>
		<h3>我是:{{name}},我今年:{{age}}岁了！</h3>
		<h3>下方组件的总人数为：{{personList.length}}</h3>
		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		<!-- <button @click="increment">+</button>
		<button @click="decrement">-</button> -->
		<button @click="increment(n)">+</button>
		<button @click="decrement(n)">-</button>
		<button @click="incrementOdd(n)">当前求和为奇数再加</button>
		<button @click="incrementWait(n)">等一等再加</button>
	</div>
</template>

<script>
import {mapGetters,mapState,mapMutations,mapActions} from 'vuex'
	export default {
		name:'Count',
		data() {
			return {
				n:1, //用户选择的数字
			}
		},
		mounted() {
			
		},
		computed:{
			//借助mapState生成计算属性，从state中去读属性：对象写法
			// ...mapState({sum:'sum',name:'name',age:'age'})
			// 数组写法
			...mapState(['sum','name','age','personList']),
			...mapGetters(['bigSum']),
			
			// ...mapMutations(['add','substract'])
		},
		methods: {
			// increment(){
			// 	this.$store.commit('add',this.n)
			// },
			// decrement(){
			// 	this.$store.commit('substract',this.n)
			// },

			// incrementOdd(){
			// 	this.$store.dispatch('addOdd',this.n)
			// },
			// incrementWait(){
			// 	this.$store.dispatch('addWait',this.n)
			// },

			...mapActions({incrementOdd:'addOdd',incrementWait:'addWait'}),
			...mapMutations({increment:'add',decrement:'substract'}),
			// ...mapMutations(['add','substract']),
		},
	}
</script>

<style lang="css">
	button{
		margin-left: 5px;
	}
</style>
