<template>
   <div class="module-warp">
      <div class="module-service">
        <div class="list-item">
          <div class="left">
            <span class="title">服务</span>
          </div>
          <div class="list-content">
              <ul class='list-sevice'>  
                  <li>正品保证</li>
                  <li><span class="iconfont icon-dian"></span>极速退款</li>
                  <li><span class="iconfont icon-dian"></span>赠运费险</li>
                  <li><span class="iconfont icon-dian"></span>七天退换</li>
              </ul>
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
  name: 'modService',
  data () {
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $base:75;
  .module-service {
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
        .list-sevice{
          li{
            display:inline-block;
           
          }
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
