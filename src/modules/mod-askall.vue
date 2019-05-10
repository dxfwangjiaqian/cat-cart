<template>
    <div class="module-warp ">
      <div class="module-askall">
        <div class="askall-title"> 
            <span> 问大家(32)</span> 
            <a href="javascript:;" class="view-all right">查看全部<span class="iconfont icon-right"> </span></a>
        </div>
        <ul class="askall-list">
          <li>
            <span class="icon-ask">问</span>
            <span class="askall-text">厚不厚呀</span>
            <span class="right ask-count">3个回答</span>
          </li>
          <li>
            <span class="icon-ask">问</span>
            <span class="askall-text">大不大呀</span>
            <span class="right ask-count">3个回答</span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'modAskall',
  data () {
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $base:75;
   /*问大家*/
  .module-warp {
     padding:0.26rem;
     background-color:#fff;
     &::before{
      height:1px;
      background-color:#f5f5f5;
      display: block;
      content:'';
      position:relative;
      top:-0.26rem;
      left:0;
    }
    .module-askall{
      .askall-title{
        font-size:14px;
        color:#666;
        line-height:20px;
        .view-all{
          color:#FF0036;
          text-decoration:none;
          &:active{
            color:#FF0036;
          }
          &:link{
            color:#FF0036;
          }
          &:hover{
            color:#FF0036;
          }
          span{
            font-weight:bold;
            vertical-align:middle;
            padding-left:4px;
          }
        }
      }

      .askall-list{
        margin-top:24rem/$base;
        li{
          width:100%;
          display: flex;
          flex-direction:row;
          align-items:center;
          height:25px;
          line-height:25px;
          font-size:13px;
          .askall-text{
            flex:1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .ask-count{
            color:#999;
          }
          .icon-ask{
            display: inline-block;
            width: 14px;
            height: 14px;
            line-height: 14px;
            font-size: 10px;
            text-align: center;
            color: #fff;
            background-image: linear-gradient(90deg,#ff7b3f,#ff5000);
            margin-right: 3px;
            border-radius: 2px;
          }
        }
      }
    }
  }
  
  
</style>
