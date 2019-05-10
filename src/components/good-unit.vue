<template>
  <div >
  	<div class="unit" v-for="good in goods"  :key="good.id">
  		<div class="unit-box">
  			<div class="unit-list">
  				<div class="unit-choose">
		   			<checkbox v-model="good.checked" @change="checked=>checkSingle(checked,pId,good.id)"></checkbox>
			   	</div>
			   	<div class="unit-detail">
			   		<div class="unit-img">
			   			<a href="javascript:;">
			   				<img src="static/images/shop-logo.png" >
			   			</a>
			   		</div>
			   		<div class="unit-info">
			   			<a href="javascript:;">
			   				<h3 class="title">{{good.title}}</h3>
			   			</a>
			   			<editChoose></editChoose>
			   			<div class="pay">
			   				<div class="pay-price"><span>￥</span><span>{{good.price}}</span></div>
			   				<div class="pay-num">
			   					<editQuantity	v-model="good.num" ></editQuantity>
			   				</div>
			   			</div>
			   		</div>
			   	</div>
  			</div>
		   	
	   	</div>
    </div>
  </div>
</template>

<script>
import checkbox from "@/components/checkbox"	
import editQuantity from "@/components/edit-quantity"	  
import editChoose from "@/components/edit-choose"	
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  name: 'goodUnit',  
  components:{
    checkbox,
    editQuantity,
    editChoose
  },
  data () {
    return {
    }
  },
  props:["goodsData","pId"],
  computed:{
    ...mapGetters(
            ["findPosition","findGoodPosition"]
        ),
    goods:function(){
      return this.goodsData;
    },
  },
  methods:{
     ...mapMutations(
            ["setGoodCheck"]
        ),
    checkSingle(data,pId,id){
      var pIndex = this.findPosition(pId);
      var index = this.findGoodPosition(pIndex,id)
      var obj = {};
      obj.index = index;
      obj.pIndex = pIndex;
      obj.data = data;
      this.setGoodCheck(obj);

    }
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $base:75;
  .unit{
  	margin-top:0.08rem;
  	position:relative;
  	.unit-list{
  		display: flex;

  		.unit-choose{
  			display: flex;
  			align-items:center;
  			justify-content:center ;
  			width: 1.173rem;
  		}
  		.unit-detail{
  			flex:1;
  			display: flex;
  			.unit-img{
  				width:2.6rem;
	  			height:2.6rem;
	  			margin:.16rem 0 .16rem .32rem;
  				a{
	  				display:block;
	  				height:100%;

	  				img{

						width:100%;
						max-height:100%;
						border:1px solid #eee;
  					}
	  			}
  			}
  			.unit-info{
  				flex:1;
  				padding:.16rem .32rem;
  				h3{
  					color:#051b28;
  					font-weight:400;
  					font-size:12px;
  					height: .88rem;
   					line-height: .453rem;
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
  				.pay{

  					display:flex;
  					align-items:center;
  					justify-content:space-between;
  					width:100%;
  					height:1.17333rem;
  					.pay-price{
  						flex:1;
  						font-size:18px;
  						color:#f60;
  						font-weight:400;
  						height:100%;
  						display: flex;
						align-items:center;
  					}
  					
  				}
  			}

  		}
  	}
  }
	
</style>
