<template>
  <div class="body">
  	<keep-alive>
    	<router-view class="content"/>
	</keep-alive>
    <foot-nav class="foot-nav"></foot-nav>
  </div>
</template>

<script>
	import footNav from '@/components/foot-nav' 
	export default {
	  name: 'Home',
	  components:{
	  	footNav
	  },
	  data () {
	    return {
	    }
	  },
	  mounted(){
	  	this.$store.dispatch('getList');
	  	// this.$store.dispatch('getgoodsList');
	  }
	}
</script>
<!-- <style  >
	@import 'http://at.alicdn.com/t/font_1098278_xsatdfs09c.css' 
</style> -->
<style   lang="scss" >
	
	.body{
		display: flex;
		flex-direction: column;
		height: 100%;
		color:#051B28;
		.content{
			flex: 1 0;
			overflow: auto;
		}

		.foot-nav{
			flex: 0 0 auto;
			height: 50px;
			background: #fff;
		}
	}
</style>
