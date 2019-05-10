<template>
   <div class="module-warp">
      <div class="module-promotion">
        <div class="list-item">
          <div class="left">
            <span class="title">服务</span>
          </div>
          <div class="list-content">
            <span class="list-jf">积分</span><span>购买可得8积分</span>
          </div>
          <div class="icon">
            <span class="iconfont icon-right"></span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'modPromotion',
  data () {
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $base:75;
  .module-promotion {
    background-color:#fff;
    padding:22rem/$base 20rem/$base;
    .list-item{
      position:relative;
      .title{
        width:30px;
        color:#999;
        line-height:20px;
        overflow:hidden;
      }
      .list-content{
        height:20px;
        line-height:20px;
        margin-left:30px;
        overflow: hidden;
        white-space: nowrap;
        .list-jf{
          transform: scale(.7);
          display: inline-block;
          border: 1px solid #FFF5F7;
          background: #FFF5F7;
          border-radius: 2px;
          padding: 1px 3px;
          font-size: 14px;
          line-height: 1;
          color: #FF0036;
        }
      }
      .icon{
        position:absolute;
        right:0;
        top:2px;
        color:#999;
        .link-writing{
          vertical-align:top;
        }
      }

      
    }
  
  }
   
  
</style>
