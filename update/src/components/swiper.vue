<template>
	<div>
		<swiper ref="mySwiper" :options="swiperOptions" >
		  <swiper-slide><img src='../img/bg/1.jpg' width="100%" height="300px"></swiper-slide>
		  <swiper-slide><img src='../img/bg/2.jpg' width="100%" height="300px"></swiper-slide>
		  <swiper-slide><img src='../img/bg/3.jpg' width="100%" height="300px"></swiper-slide>
		  <swiper-slide><img src='../img/bg/4.jpg' width="100%" height="300px"></swiper-slide>
		  <swiper-slide><img src='../img/bg/5.jpg' width="100%" height="300px"></swiper-slide>
		</swiper>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper';
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOptions: {
		  autoplay: {
		      delay: 1500,
		      stopOnLastSlide: false,
		      disableOnInteraction: true,
		      },
		  speed:1000,
		  effect : 'coverflow',
		    slidesPerView: 3,
		    centeredSlides: true,
		    coverflowEffect: {
		      rotate: 30,
		      stretch: 10,
		      depth: 60,
		      modifier: 2,
		      slideShadows : true
		    },
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      console.log('Current Swiper instance object', this.swiper)
      // this.swiper.slideTo(1,5000, false)
    }
  }
</script>
