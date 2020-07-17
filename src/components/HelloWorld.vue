<template>
	<div class="hello">
		<input type="checkbox" :value="item.id" :name="item.title" v-for="item in todos" />{{item.id}}
		<input type="checkbox" />
	</div>
</template>

<script>
	import {
		reactive,
		ref,
		onMounted
	} from 'vue'
	export default {
		name: 'HelloWorld',
		props: ['getwrite'],
		setup() {
			const todos = ref(
				[{
						id: 1,
						title: '吃饭'
					},
					{
						id: 2,
						title: '睡觉'
					}, {
						id: 3,
						title: '打豆豆'
					}
				]
			)
			return {
				todos
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello{
	width: 100%;
	background-color: red;
	display: flex;
	flex-direction: column;
	
	input{
		width: 100%;
		height: 30px;
	}
}
</style>
