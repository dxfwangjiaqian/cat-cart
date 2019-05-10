<template>
	<div class='swiper-container'>
	 <swiper :options="options" > 
	 	<swiper-slide v-for='(url,index) of itemUrls' :key="index">
	 		<img :src="url" class="swiper-img"> 
	 	</swiper-slide>
	 </swiper>
	 <div class="swiper-pagination" solt='pagination'></div>
	</div>

</template>

<script>
export default {
  name: 'Carousel',
  data () {
    return {
    }
  },
  props:['itemUrls','options'],
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >

	.swiper-slide,.swiper-slide img{
		width:10rem;
		height:10rem;
		
	}
	.swiper-pagination{
		color:#fff;
		width:auto;
		background: rgba(0,0,0,.4);
		border-radius: 8px;
		padding: 2px 6px;
		left: initial;
		right: 0.26rem;
		bottom: 0.26rem;
	}
</style>
