<template>
    <div class="module-warp">
	  <div class="detail-item">
	    <div class="detail-item-title"> 
	      <div>
	        <hr>
	      </div>
	      <span>详情</span>
	      <div>
	        <hr>
	      </div>
	    </div>
	    <div class="detail-item-content">
	        <img :src="detailImg" alt="图文详情">
	    </div>
	  </div>
	</div>
</template>

<script>
export default {
  name: 'modGener',
  data () {
    return {
    	detailImg:require("@/assets/images/detail.jpg")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $base:75;
  /*详情*/
  .detail-item {
    padding:0;
    .detail-item-title{
      display:flex;
      padding:10px 30% 0 30%;
      text-align: center;
      color: #999;
      margin-bottom: 10px;
      div,span{
        flex:1;
      }

    }
    .detail-item-content{
      background-color:#fff;
      img{
        width:10rem; 
      }
    }
  }
</style>
