<template>
  <div id="app">
	<bottombar></bottombar>
    <router-view/>
  </div>
</template>

<script>
	import bottombar from './components/bottombar.vue'
	export default{
		components:{
			bottombar
		}
	}
</script>
<style lang="less">
	body{
		background-image: url(../dist/img/5.947ab4b7.jpg);
		background-position: center;
		background-repeat: no-repeat;
	}
	button{
		font-size: 12px;
		color: #3a3a3a;
		opacity: 0.8;
	}
</style>
