<template>
	<div class="Questionnaire">
		<h3>注册用户</h3>
		<div class="name">
			<label for="name">1.取一个霸气侧漏de名字</label></br>
			<input type="text" id="name" ref='name'/>
		</div>
		<div class="pass">
			<label for="pass">2.千万别告诉我你de密码</label></br>
			<input type="text" id="pass" ref='pass'/>
		</div>
		<div class="sex">
			<label for="">3.你是 boy or girl</label></br>
			<input type="radio" id="man" value="男" v-model="sex" />男
			<input type="radio" id="sex" value="女" v-model="sex" />女
		</div>
		<div class="color">
			<label for="color">4.你喜欢de颜色 </label></br>
			<input type="text" id="color" ref='color'/>
		</div>
		<div class="age">
			<label for="age">5.你de年龄</label></br>
			<select ref='age'>
				<option value="200">200岁</option>
				<option value="400">400岁</option>
				<option value="600">600岁</option>
				<option value="800">800岁</option>
				<option value="forever">forever</option>
			</select>
		</div>
		<div class="city">
			<label for="city">6.来自哪个银河系</label></br>
			<input type="text" id="city" ref='city'/>
		</div>
		<div class="birthday">
			<label for="birthday">7.你的生日</label></br>
			<input type="text" id="birthday" ref='birthday'/>
		</div>
		<div class="hoppy">
			<label for="hoppy">8.你最喜欢的东西是什么 </label></br>
			<input type="text" id="hoppy" ref='hoppy'/>
		</div>
		<div class="dream">
			<label for="dream">9.You 的 dream </label></br>
			<input type="text" id="dream" ref='dream'/>
		</div>
		<div class="power">
			<label for="dream">10.你想获得什么超能力 </label></br>
			<input type="text" id="dream" ref='power'/>
		</div>
		<div class="subarea">
			<button class="sub" @click="sub">提交</button>
			<button class="sub" @click="back">返回主页</button>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
					sex:''
			}
		},
		methods:{
			sub:function(e){
				let obj = {}
				let name = this.$refs['name'].value
				let pass = this.$refs['pass'].value
				let city = this.$refs['city'].value
				let color = this.$refs['color'].value
				let hoppy = this.$refs['hoppy'].value
				let dream = this.$refs['dream'].value
				let birthday = this.$refs['birthday'].value
				let age = this.$refs['age'].value
				let sex = this.sex
				obj = {
					'name':name,
					'pass':pass,
					'city':city,
					'color':color,
					'hoppy':hoppy,
					'birthday':name,
					'dream':dream,
					'age':age,
					'sex':sex,
				}
				console.log(obj)
			},
			back:function(){
				this.$router.push('/')
			}
		}
	}
</script>

<style lang="less">

	.Questionnaire{
		width: 500px;
		margin: 10px auto;
		text-align: center;
		font-family: "微软雅黑";
		font-size: 16px;
		text-shadow:2px 0px 2px purple,
					0px 2px 2px purple,
					-2px 0px 2px purple,
					0px -2px 2px purple;
		color:white;
		
		div {
			text-align: left;
			// margin: 4px 0;
			padding: 4px 2px 4px 8px;
			
			input {
				margin: 4px 0px 4px 0px;
				border: none;
				border-radius: 5px;
				outline: none;
			}
		}
		.subarea{
			text-align: center;
		}
	}
</style>
