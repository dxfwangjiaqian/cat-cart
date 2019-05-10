<template>
    <div class="edit-choose">
    	<div >	
    		<p>	直筒裤-浅杏色；s直筒裤-浅杏色；直筒裤-浅杏色；</p>
    		<span class="iconfont icon-jiantouxia">	</span>
    	</div>
	</div>
</template>

<script>
export default {
  name: 'editChoose',
  data () {
    return {
      
    }
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $base:75;
  .edit-choose{
  	margin-top: .16rem;
    max-height: 1.06667rem;
    line-height: .48rem;
    overflow: hidden;
    color: #999;
    cursor: pointer;
    background-color: #f5f5f5;
    border-radius: .08rem;
    padding: .05333rem .10667rem .05333rem .10667rem;
    
	div{
		display:flex;
   		align-items:center;
	}
	p{
		font-size:12px;
		flex:1;
		overflow: hidden;
				    word-break: break-all;

				    -webkit-line-clamp: 2;
			        -moz-line-clamp: 2;
			        -ms-line-clamp: 2;
			        -o-line-clamp: 2;
			        line-clamp: 2;
			        -webkit-box-orient: vertical;
			        -ms-box-orient: vertical;
			        -o-box-orient: vertical;
			        box-orient: vertical;
			        display: -webkit-box;
			        display: -moz-box;
			        display: -ms-box;
			        display: -o-box;
			        display: box;
	}	
	.iconfont{
		width:28rem/$base;
		width:28rem/$base;
	}
    .iconfont:before{
    	font-size:13px;
    }
  }
</style>
