<template>
	<div class="car">
	 	 <div class="header">
		    <div class="header-flex">
			    <div  @click="$router.back()">
			      <span class="iconfont icon-left"></span>
			    </div>
			    <div class="header-title" >
			      <span>购物车</span>
			      <span>（{{number}}）</span>
			    </div>
			    <div></div>
		     </div>
		 </div>
		 <div class="car-container">
		 	<goodBundle :boundleData="boundles"></goodBundle>
		 </div>
     <div class="car-total-payment">
       <div class="choose-btn"> 
          <checkbox v-model="totalCheck" @change="totalFun"></checkbox>
          <label >全选</label>
        </div>
        <div class="pay-total">
          <span>合计：</span>
          <span class="price">￥</span>
          <span class="price">{{getTotal}}</span>
        </div>
        <div class="pay-btn">
          <span>结算</span>
          <span>(</span>
          <span>{{getNums}}</span>
          <span>)</span>
        </div>
     </div>
	</div>
</template>

<script>
import goodBundle from "@/components/good-bundle"
import checkbox from "@/components/checkbox"
import { mapMutations } from 'vuex'
import Axios from "axios"
export default {
  name: 'Car',
  components:{goodBundle,checkbox},
  data () {
    return {
      // totalCheck:false
    }
  },
  created(){
   
  },
  computed:{
    boundles(){
      return this.$store.state.goodsList;
    },
    number(){
      return this.$store.getters.goodsNumber;
    },
    getTotal(){
      return this.$store.getters.getTotal;
    },
    getNums(){
      return this.$store.getters.getNums;
    },
    totalCheck:{
      get:function(){
        return this.$store.state.totalCheck;
      },
      set:function(data){
        this.$store.commit("setTotalCheck",data);
      }
    }
  },
  methods:{
    ...mapMutations(
            ["setCheckAll"]
        ),
    totalFun(data){
      this.setCheckAll(data);
      this.totalCheck = data;
    },
    
  }
 
 
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
  $base:75;


a{
    color:#051b28;
    text-decoration:none;
    cursor: pointer;
    &:link,&:active{
      color:#051b28;
    }
}
h1,h2,h3,h4,h5,h6,p{margin:0;}
  /*头部*/
	.car{
    display: flex;
    flex-direction: column;
    height:100%;
  }
  .header{
   position:fixed;
    top:0;
    left:0;
    z-index:10;
    width:100%;
    .header-flex{
      display: flex;
      align-items:center;
      height:88rem/$base;
      line-height:88rem/$base;
      box-shadow:0 1px 0 rgba(0,0,0,.05), 0 0.5px 0 rgba(0,0,0,.09);
      font-size:14px;
      background-color:#fff;
      div{
      	flex:1;
		display: flex;
		align-items:center;
      }
	  .header-title{
	  	font-size:18px;
	  	text-align:center;
	  }
      .iconfont{
      	box-sizing:border-box;
        font-size:24px;
        padding-left:10.5px;
      }
    }
  }

  .car-container{
	   margin-top:1.17333rem;
     flex:1 0;
     overflow: auto;
  }


  .car-total-payment{
      font-size:14px;
      width: 100%;
      height: 1.30667rem;
      background: #fff;
      border-top: .02667rem solid #e7e7e7;
      display: flex;
      align-items: center;
      .choose-btn{
        display: flex;
        align-items: center;
        font-size:16px;
        margin-left: .32rem;
      }
      .pay-total{
        flex:1;
        text-align:right;
        span{
         
          &.price{
            color:#f50;
          }
        }
      }
      .pay-btn{
        width: 2.77333rem;
        height:100%;
        color: #fff;
        background: #f50;
        justify-content: center;
        align-items: center;
        display: flex;
        margin-left: .32rem;
      }
  }
</style>
