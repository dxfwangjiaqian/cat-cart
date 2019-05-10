<template>
   <div class="module-warp">
      <div class="module-gener">
        <div class="detail-gener">
          <div class="detail-pirce"><span>￥</span>{{generItem.price}}</div>
          <div class="detail-title">{{generItem.title}}</div>
          <div class="detail-line">
            <span>快递：{{generItem.Postage}}</span>
            <span>月销量：{{generItem.SalesVolume}}</span>
            <span>{{generItem.PlaceOrigin}}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'modGener',
  data () {
    return {

    }
  },
  props:["generItem"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $base:75;
   /*内容之轮播下面的概括*/
  .detail-gener{
    padding:0.26rem;
    background-color:#fff;
    div{
      margin:0 0 0.2rem 0;
      &.detail-title{
        font-size:14px;
      }
      &.detail-pirce{
        font-size:24px;
        color:#FF0036;
        span{
          font-size:18px;
        }
      }
    }
    .detail-line{
      display: flex;
      span{
        flex:1;
        text-align:center;
        color:#999;
        &:last-child{
          text-align:right;
        }
        &:first-child{
          text-align:left;
        }
      }
    }
  }
</style>
