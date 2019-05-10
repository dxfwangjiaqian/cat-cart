<template>
    <div class="module-warp">
      <div class="comments-warp">
        <div class="comments-title"> 
            <span> 商品评价(3232)</span> 
            <a href="javascript:;" class="view-all right">查看全部<span class="iconfont icon-right"> </span></a>
        </div>
        <div class="comments-list">  
          <div class="comments-list-item">
            <div class="comments-list-user">
              <img :src="userImg" alt="头像" class="user-img">
              <span class="user-name">t**8</span>
            </div>
            <div class="comments-list-content">
              家--公 纵 呺【 淘达鸭 】有大~De~福~利 ~ 领~ 取！！很满意哦，价钱不贵质量还不错，真是太划算了，你们也去试试吧，收到货了，包装很好，看起来很高档，东西质量没得说，这个价格买到比我预期的质量好太多了。产品描述和实物一致，很满意，性价比很高！非常划算，便宜实惠 ，要给个赞啊！快递也很快很不错，表扬快递员客服的态度，也是非常的不错，很有耐心详细的回答我的问题。会推荐给朋友过来买！祝店家生意兴龙。5分 好评！！！
            </div>
            <div class="comments-list-date">
              2019-03-17 颜色分类:七彩梦护边碗10个装
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'modComments',
  data () {
    return {
      userImg:require("@/assets/images/comments.jpg"),
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $base:75;
  /*评价*/
  .comments-warp{
    padding:22rem/$base 20rem/$base;
    background-color:#fff;
    .comments-title{
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
    .comments-list-item{
      margin:8rem/$base 0;
     /* padding-bottom:18rem/$base; */
      /* border-bottom:1px solid #F5F5F5;  */
      .comments-list-user{
        margin-bottom:20rem/$base;
        .user-img{
          width: 24px;
          height: 24px;
          border-radius: 20px;
          vertical-align: middle;
        }
        .user-name{
          
          padding: 5px;
          line-height: 22px;
          color: #999;
        }
      }
      .comments-list-content{
        font-size: 13px;
        line-height: 16px;
        text-align: justify;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        -webkit-box-pack: center;
        height: 32px;
        overflow: hidden;
        word-break: break-all;
        
      }
      .comments-list-date{
        font-size: 10px;
        padding-top: 16rem/$base;
        color: #999;
        line-height: 14px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  
</style>
