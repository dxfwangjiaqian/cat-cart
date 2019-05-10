<template>
    <div class="detail-footer">
        <div class="footer-warp">
          <div class="cell">
            <span class="iconfont icon-dianpu"></span>
            <p>店铺</p>
          </div>
          <div  class="cell">
            <span class="iconfont icon-kefu"></span>
            <p>客服</p>
          </div>
          <div  class="cell">
            <span class="iconfont icon-xingji"></span>
            <p>收藏</p>
          </div>
          <div class="footer-item">
            <a href="javascript:;" class="addBtn" @click="addFun">加入购物车</a>
            <a href="javascript:;" class="buy">立即购买</a>
          </div>
        </div>
      </div>  
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'detailFooter',
  data () {
    return {

    }
  },
  props:["id","pId"],
  methods:{
    ...mapMutations(
            ["add"]
        ),
    addFun(){
      var data = {};
      data.id = this.id;
      data.pId = this.pId;
      this.add(data);
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $base:75;
   /*尾部*/
  .detail-footer{
    position:fixed;
    bottom:0;
    left:0;
    z-index:1;
    width:100%;
    .footer-warp{
      display:flex;
      height:100rem/$base;
      line-height:100rem/$base;
      background-color:#fff;
      a{
        text-decoration:none;
        color:#999;
        &:hover,&:link,&:active{
          color:#999;
        }
      }
        
        .cell{
          flex:1;
          display: inline-flex;
          flex-direction:column;
          justify-content:center;
          max-width:100rem/$base;
          height:100rem/$base;
          text-align:center;
          color:#999;
          span.iconfont{
            font-size:20px;
            height:22px;
            &.icon-kefu{
              color:#4a90e2;
            }
          }
          p{
            width:100%;
            margin:0;
            font-size:12px;
          }
        }
      
      .footer-item{
        flex:1;
        display:flex;
        a{
          flex:1;

          text-align:center;
          font-size:16px;
          color:#fff;
          &.addBtn{
            background-color:#FF9500;
          }
          &.buy{
            background-color:#FF0036;
          }
        }
      }
    }
  }
</style>
