<template>
	<div class="login">
		<h3>登录</h3>
		<div class="user">
			<input type='text' id="user" placeholder="username">
		</div>
		<div class="pass">
			<input type='password' id="pass" placeholder="password">
		</div>

		<div class="sub">
			<button type="button" id="btn"><a href="" @click="jump">登陆</a></button>
			<button type="button" id="btn"><a href="" @click="signUp">注册</a></button>
		</div>
	</div>
</template>

<script>
	export default {
	  components:{
		  
	},
	data () {
	  return {
	    
	  }
	},
	methods:{
		jump:function(){
			console.log(123)
			this.$router.push('/index')
		},
		signUp:function(){
			this.$router.push('/Questionnaire')
		}
	},
	mounted() {
	  this.$axios.post('http://liaixi.xyz/php/test.php')
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  });
	
	}
	}
</script>

<style lang="less">
	
	.login{
		width: 100%;
		margin-top: 50px;
		padding: 10px 0px;
		box-sizing: border-box;
		text-align:center;
		color:white;
		
		.user{
			
			display: block;
			width: 300px;height: 40px;
			margin: 0 auto 20px;
			outline : none;
			background-position: center;
			background-size: cover;
			border-radius: 50px;
			position: relative;
			box-sizing: border-box;
		}
		.user input{
			width: 300px;
			height: 40px;
			outline : none;
			border-radius: 50px;
			border: none;
			padding-left: 10px;
			box-sizing: border-box;
		}
		.user .usericon{
			width:  50px;
			height: 40px;
			position: absolute;
			top: 0;
			left: 5px;
			background-position: center;
			border-radius: 50px;
		}
		
		.pass{
			display: block;
			width: 300px;height: 40px;
			margin: 0 auto 20px;
			outline : none;
			background-position: center;
			background-size: cover;
			border-radius: 50px;
			position: relative;
			box-sizing: border-box;
		}
		.pass input{
			width: 300px;
			height: 40px;
			outline : none;
			border-radius: 50px;
			border: none;
			padding-left: 10px;
			box-sizing: border-box;
		}
		.pass .passicon{
			width:  50px;
			height: 40px;
			position: absolute;
			top: 0;
			left: 5px;
			background-position: center;
			border-radius: 50px;
		}
		
		.sub{
			width: 300px;height: 40px;
			margin: 20px auto ;
			text-align: center;
			line-height: 40px;
		}
		.sub button{
			font-size: 14px;
			color: #578197;
			outline : none;
			border-radius:10px;
			margin-right: 20px;
			border: none;
			
			a{
				display: block;
				text-decoration: none;
				color: black;
				border: none;
				padding:5px 10px;
				border-radius:10px;
			}
		}
		
	}
</style>
