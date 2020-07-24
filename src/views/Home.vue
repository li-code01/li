<template>
  <div class="home">
    <h3>Todos</h3>
	<div class="info">
		<input type="text" class="write" ref='write'/>
		<button class="btn" @click="getwrite">提交</button>
	</div>
	<HelloWorld :getwrite='txt'></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {reactive, ref, onMounted} from 'vue'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  setup(){
	  const write = ref(null)
	  const txt = ref('')
	  const getwrite = function(){
		  console.log(write.value.value)
		  txt.value = write.value.value
		  write.value.value = ''
	  }
	  
	  return {write,getwrite,txt}
  },
}
</script>

<style lang="less">
	.home{
		width: 500px;height: 500px;
		margin: 0 auto;
		background: gray;
		display: flex;
		justify-content: start;
		flex-direction: column;
		text-align: center;
		h3{
			color: rgb(234,215,215);
			font-size: 20px;
			margin-top: 20px;
		}
		.info{
			width: 100%;
			height: 30px;
			margin-top: 5px;
			display: flex;
		}
		input{
			height: 100%;
			flex: 1;
			border: none;
		}
		.btn{
			width: 50px;
			border: none;
			border-radius: 20px;
			background: ;
		}
	}
</style>