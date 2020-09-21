<template>
	<div class="home">
		<swipers></swipers>
	</div>
</template>

<script>
	import swipers from '../components/swiper.vue'
    export default {
	  components:{
		  swipers
	},
    data () {
      return {
        
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.mySwiper)
      // this.mySwiper.slideTo(3, 1000, false)
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
