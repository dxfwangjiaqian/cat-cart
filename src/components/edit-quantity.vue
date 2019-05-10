
<template>
    <div class="edit-quantity">
    	<div class="btn-minus">
    		<a @click="changeNum(0)" >-</a>
    	</div>
    	<div class="btn-input">
    		<input type="text" :value="val"/>
    	</div>
    	<div class="btn-plus">
    		<a @click="changeNum(1)" >+</a>
    	</div>
	</div>
</template>

<script>
export default {
  name: 'editQuantity',
  data () {
    return {
      
    }
  },
  model:{
  	prop:"val",
  	event:"changeNum"
  },
  props:{
	val:{
	  type:Number,
	  default:1
	}
  },
  methods:{
  	changeNum(who){
  		var num;
  		num=who==0?this.minus:this.add;
  		this.$emit('changeNum', num);
  		
  	}
  	
    
  },
  computed:{
  	minus(){
  		return  (this.val > 0 ) ? (this.val-1):0;
  	},
  	add(){
  		return this.val+1;
  	}
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $base:75;
  .edit-quantity{
  	display: flex;
	height:100%;
	width:2.33333rem;
	div{
		
	}
	.btn-input{
		flex:1;
		display: flex;
		input{
			width:100%;
			text-align:center;
			border:none;
			font-size:16px;
		}
	}
	.btn-minus,.btn-plus{
		height:100%;
		width:.88rem;
		font-size:26px;
		font-weight:300;
		
		a{
			display: block;
			width:100%;
			height:100%;
			text-align:center;
			color:#878787;
		}
	}
  }
	
</style>
