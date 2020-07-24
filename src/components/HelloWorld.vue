<template>
	<div class="hello">
		<div class="box" v-for="item in todos">
			<input type="checkbox" :value="item.id" :name="item.title" @click="sel(item.id)" />
			{{item.title}}
		</div>
	</div>
</template>

<script>
	import {
		reactive,
		ref,
		onMounted, computed, watch,props
	} from 'vue'
	export default {
		name: 'HelloWorld',
		props: ['getwrite'],
		setup(props) {
			console.log(props.getwrite)
			const arr = []
			const txt = props
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
			const txts = watch(txt,(val)=> {
				console.log(todos.value)
				todos.value.push({
					id:todos.value.length+1,
					title:val.getwrite
				})
			})
			const sel = function(f){
				console.log(f)
			}
			return {
				todos,txt,txts,sel
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
