<template>
    <div class="module-warp">
      <div class="module-shop">
        <div class="shop-main">
          <div class="shop-logo">
            <img src="static/images/shop-logo.png" alt="店铺标志">
          </div>
          <div class="shop-info">
            <p class="shop-name" :title="shopItem.name">{{shopItem.name}}</p>
            <div class="shop-title">
              <img :src="titleUrl" alt="装饰图">
            </div>
          </div>
        </div>

        <ul class="score">
          <li>宝贝描述<b :class="describeScoreClass">4.9 </b></li>
          <li>卖家服务<b :class="serviceScoreClass">4.8 </b></li>
          <li>物流服务<b :class="logisticsScoreClass">4.8 </b></li>
        </ul>

        <div class="shop-action">
          <a class="all-product " href="javascript:;">全部商品</a> 
          <a class="go-shop " href="javascript:;">进入店铺</a>
        </div>
      </div>
        
    </div>  
</template>

<script>
export default {
  name: 'modShop',
  data () {
    return {
      titleUrl:require("@/assets/images/shop-title.png"),
    }
  },
  props:["shopItem"],
  computed:{
    describeScoreClass(){
      var className='';
      if(this.shopItem.describeUpOrDown==0){
        className="down"
      }else if(this.shopItem.describeUpOrDown==1){
        className="equal"
      }else if(this.shopItem.describeUpOrDown==2){
        className="up"
      }
      return className ;
    },
    serviceScoreClass(){
      var className='';
      if(this.shopItem.serviceUpOrDown==0){
        className ="down"
      }else if(this.shopItem.serviceUpOrDown==1){
        className ="equal"
      }else if(this.shopItem.serviceUpOrDown==2){
        className ="up"
      }
      return className ;
    },
    logisticsScoreClass(){
      var className='';
      if(this.shopItem.logisticsUpOrDown==0){
        className ="down"
      }else if(this.shopItem.logisticsUpOrDown==1){
        className ="equal"
      }else if(this.shopItem.logisticsUpOrDown==2){
        className ="up"
      }
      return className ;
    }
  }
  
 
  
 
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $base:75;
  .module-shop{
    padding:0.26rem;
    background-color:#fff;
    .shop-main{
      display: flex;
      .shop-logo{
        width: 54px;
        min-width: 54px;
        height: 54px;
        border: 1px solid rgba(151,151,151,.5);
        img{
          width:100%;
          height:100%;
        }
      }
      .shop-info{
        flex:1;
        display: block;
        padding:10rem/$base 20rem/$base;
        line-height:18px;
        p.shop-name{
          margin:0;
          color: #333;
          font-size: 16px;
          text-overflow: ellipsis;
          overflow: hidden;
          word-break: break-all;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          -webkit-box-pack: center;
        }
        .shop-title{
          margin-top:10rem/$base;
        }

      }
    }

    .score{
      display: flex;
      margin:24rem/$base 20rem/$base;
      li{
        flex:1 0 auto;
        text-align:center;
        color:#999;
        font-size:12px;
        b{
          padding-right: 14px;
          background-position: 100% 50%;
          background-repeat: no-repeat;
          background-size: 12px;
          font-weight: 400;
          &.up{
            color:#e13e4c;
            background-image:url("../assets/images/up.png");
          }
          &.down{
            color:#00b78b;
            background-image:url("../assets/images/down.png");
          }
          &.equal{
            color:#1193ce;
            background-image:url("../assets/images/equal.png");
          }
        }
      }
    }


    .shop-action{
      display: flex;
        justify-content:center;
      a{
        flex:1;
        border: 1px solid rgba(255,0,54,.5);
        height: 24px;
        line-height: 22px;
        font-size: 13px;
        color: rgba(255,0,54,.8);
        border-radius: 12px;
        text-align: center;
        display: block;
        max-width: 96px;
        text-decoration:none;
        &:first-child{
          margin-right:20px;
        }
        &.all-product{

        }
        &.go-shop{
          
          
        }
      }
    }
  }
</style>
