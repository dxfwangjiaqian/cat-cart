<template>
   <div class="module-warp">
      <div class="module-choose">
        <div class="list-item">
          <div class="left">
            <span class="title">选择</span>
          </div>
          <div class="list-content">
            <span>请选择颜色分类</span>
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
  name: 'modChoose',
  data () {
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $base:75;
  .module-choose{
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
